<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ChatbotController extends Controller
{
    public function chat(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'message' => ['required', 'string', 'max:1000'],
        ]);

        $apiKey = (string) config('services.chatbot.api_key');
        $model = (string) config('services.chatbot.model');
        $baseUrl = rtrim((string) config('services.chatbot.base_url'), '/');

        if ($apiKey === '') {
            return response()->json([
                'message' => 'Chatbot API key is not configured.',
            ], 500);
        }

        $prompt = implode("\n\n", [
            'You are the official MicroPay website assistant.',
            'Answer only questions related to MicroPay, its services, registration, fees, agents, app access, office contacts, terms, privacy, and support.',
            'If a question is outside MicroPay, politely say you can only help with MicroPay-related questions.',
            'Be concise, factual, and website-safe. Do not invent unsupported policies, prices, or legal claims.',
            'Use plain text with short paragraphs or short lists when useful.',
            'Known MicroPay facts:',
            '- MicroPay is a Financial Technology company licensed and regulated by the Bank of Uganda as a PSP and PSO.',
            '- Main office: Plot 31 Kanjokya Street, Kamwokya, Kampala, 3rd Floor Wildlife Tower.',
            '- Support contacts include info@micropay.co.ug and +256 702 461 049.',
            '- Services include peer-to-peer transfers, airtime, bill payments, tuition payments, and agency banking.',
            'User question: '.$validated['message'],
        ]);

        $response = Http::timeout(30)
            ->acceptJson()
            ->post("{$baseUrl}/models/{$model}:generateContent?key={$apiKey}", [
                'contents' => [
                    [
                        'parts' => [
                            ['text' => $prompt],
                        ],
                    ],
                ],
                'generationConfig' => [
                    'temperature' => 0.3,
                    'maxOutputTokens' => 500,
                ],
            ]);

        if ($response->failed()) {
            return response()->json([
                'message' => 'Chatbot API request failed.',
                'details' => $response->json(),
            ], 502);
        }

        $reply = data_get($response->json(), 'candidates.0.content.parts.0.text');

        if (! is_string($reply) || trim($reply) === '') {
            return response()->json([
                'message' => 'Chatbot API returned an empty response.',
            ], 502);
        }

        return response()->json([
            'reply' => trim($reply),
        ]);
    }
}
