<?php

namespace App\Http\Controllers;

use App\ServicePage;

class MakePaymentController extends Controller
{
    public function index()
    {
        $servicePage = ServicePage::where('slug', 'make-payment')->firstOrFail();

        return view('service.show', compact('servicePage'));
    }
}
