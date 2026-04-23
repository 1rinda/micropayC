<?php

namespace App\Http\Controllers;

use App\ServicePage;

class RequestPaymentController extends Controller
{
    public function index()
    {
        $servicePage = ServicePage::where('slug', 'request-payment')->firstOrFail();

        return view('service.show', compact('servicePage'));
    }
}
