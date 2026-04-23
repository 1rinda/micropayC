<?php

namespace App\Http\Controllers;

use App\ServicePage;

class BuyAirtimeController extends Controller
{
    public function index()
    {
        $servicePage = ServicePage::where('slug', 'buy-airtime')->firstOrFail();

        return view('service.show', compact('servicePage'));
    }
}
