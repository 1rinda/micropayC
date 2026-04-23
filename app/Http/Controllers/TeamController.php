<?php

namespace App\Http\Controllers;

use App\TeamMember;
use Illuminate\Support\Facades\Schema;

class TeamController extends Controller
{
    public function index()
    {
        $teamMembers = collect();

        if (Schema::hasTable('team_members')) {
            $teamMembers = TeamMember::active()
                ->ordered()
                ->get();
        }

        return view('team.index', compact('teamMembers'));
    }
}
