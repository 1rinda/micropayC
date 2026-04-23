<?php

namespace App\Http\Controllers;

use App\ServicePage;

class AgencyBankingController extends Controller
{
    public function index()
    {
        $servicePage = ServicePage::where('slug', 'agency-banking')->firstOrFail();

        return view('service.show', compact('servicePage'));
    }
}
