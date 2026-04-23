<?php

namespace App\Http\Controllers\Admin;

use App\HomeSlide;
use App\Http\Controllers\Controller;
use App\Post;
use App\ServicePage;
use App\TeamMember;
use Illuminate\Support\Facades\Schema;
use Illuminate\View\View;

class AdminDashboardController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth', 'admin']);
    }

    public function index(): View
    {
        return view('admin.dashboard', [
            'stats' => [
                'slides' => Schema::hasTable('home_slides') ? HomeSlide::count() : 0,
                'services' => Schema::hasTable('service_pages') ? ServicePage::count() : 0,
                'posts' => Schema::hasTable('posts') ? Post::count() : 0,
                'teamMembers' => Schema::hasTable('team_members') ? TeamMember::count() : 0,
            ],
        ]);
    }
}
