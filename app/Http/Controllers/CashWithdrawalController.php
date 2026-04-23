<?php

namespace App\Http\Controllers;

use App\ServicePage;

class CashWithdrawalController extends Controller
{
    public function index()
    {
        $servicePage = ServicePage::where('slug', 'cash-withdrawal')->firstOrFail();

        return view('service.show', compact('servicePage'));
    }
}
