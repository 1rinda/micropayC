<?php

namespace App\Http\Controllers;

use App\ServicePage;

class DepositMoneyController extends Controller
{
    public function index()
    {
        $servicePage = ServicePage::where('slug', 'deposit-money')->firstOrFail();

        return view('service.show', compact('servicePage'));
    }
}
