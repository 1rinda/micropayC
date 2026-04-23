<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\ServicePage;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\File;
use Illuminate\View\View;

class ServicePageAdminController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(): View
    {
        $servicePages = ServicePage::orderBy('sort_order')->orderBy('name')->get();

        return view('admin.service-pages.index', compact('servicePages'));
    }

    public function edit(ServicePage $servicePage): View
    {
        return view('admin.service-pages.edit', compact('servicePage'));
    }

    public function update(Request $request, ServicePage $servicePage): RedirectResponse
    {
        $servicePage->update($this->validatedData($request, $servicePage));

        return redirect()
            ->route('admin.service-pages.index')
            ->with('status', 'Service page updated successfully.');
    }

    private function validatedData(Request $request, ServicePage $servicePage): array
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'page_title' => ['required', 'string', 'max:255'],
            'page_description' => ['nullable', 'string'],
            'image' => ['nullable', 'image', 'max:5120'],
            'section_heading' => ['required', 'string', 'max:255'],
            'section_items_text' => ['required', 'string'],
            'extra_heading' => ['nullable', 'string', 'max:255'],
            'extra_items_text' => ['nullable', 'string'],
            'extra_paragraphs' => ['nullable', 'string'],
            'sort_order' => ['required', 'integer', 'min:0'],
            'is_active' => ['nullable', 'boolean'],
        ]);

        $validated['image'] = $servicePage->image;
        $validated['slug'] = $servicePage->slug;
        $validated['is_active'] = $request->boolean('is_active');
        $validated['section_items'] = $this->linesToArray($request->input('section_items_text'));
        $validated['extra_items'] = $this->linesToArray($request->input('extra_items_text'));

        unset($validated['section_items_text'], $validated['extra_items_text']);

        if ($request->hasFile('image')) {
            $validated['image'] = $this->storeImage($request->file('image'), 'uploads/service-pages');
            $this->deleteManagedImage($servicePage->image, 'uploads/service-pages/');
        }

        return $validated;
    }

    private function linesToArray(?string $value): array
    {
        if (! $value) {
            return [];
        }

        $lines = preg_split('/\r\n|\r|\n/', $value) ?: [];

        return array_values(array_filter(array_map('trim', $lines), function ($line) {
            return $line !== '';
        }));
    }

    private function storeImage(UploadedFile $image, string $directory): string
    {
        $targetDirectory = public_path($directory);

        if (! File::exists($targetDirectory)) {
            File::makeDirectory($targetDirectory, 0755, true);
        }

        $filename = uniqid('', true) . '.' . $image->getClientOriginalExtension();
        $image->move($targetDirectory, $filename);

        return trim($directory . '/' . $filename, '/');
    }

    private function deleteManagedImage(?string $path, string $managedPrefix): void
    {
        if (! $path || strpos($path, $managedPrefix) !== 0) {
            return;
        }

        $fullPath = public_path($path);

        if (File::exists($fullPath)) {
            File::delete($fullPath);
        }
    }
}
