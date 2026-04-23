<?php

namespace App\Http\Controllers;

use App\ServicePage;

class SendMoneyController extends Controller
{
    public function index()
    {
        $servicePage = ServicePage::where('slug', 'send-money')->firstOrFail();

        return view('service.show', compact('servicePage'));
    }
}
