<?php

namespace App\Providers;

use App\HomeSlide;
use App\Post;
use App\TeamMember;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\View;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        View::composer('welcome', function ($view) {
            $homeSlides = $this->defaultHomeSlides();

            if (Schema::hasTable('home_slides')) {
                $homeSlides = HomeSlide::active()
                    ->ordered()
                    ->get();

                if ($homeSlides->isEmpty()) {
                    $homeSlides = $this->defaultHomeSlides();
                }
            }

            $view->with('homeSlides', $homeSlides);
        });

        View::composer('partials.blog', function ($view) {
            $recentPosts = collect();

            if (Schema::hasTable('posts')) {
                $recentPosts = Post::published()
                    ->latest('published_at')
                    ->take(3)
                    ->get();
            }

            $view->with('recentPosts', $recentPosts);
        });

        View::composer('partials.team', function ($view) {
            $homepageTeamMembers = collect();

            if (Schema::hasTable('team_members')) {
                $homepageTeamMembers = TeamMember::active()
                    ->where('show_on_homepage', true)
                    ->ordered()
                    ->take(4)
                    ->get();
            }

            $view->with('homepageTeamMembers', $homepageTeamMembers);
        });
    }

    private function defaultHomeSlides()
    {
        return collect([
            new HomeSlide([
                'title' => 'Simple, secure <br>mobile money service',
                'description' => 'Send & Recieve Money here and beyond.',
                'button_label' => 'Get Started',
                'button_url' => '#',
                'image' => 'images/slider/money-8.jpeg',
                'sort_order' => 1,
                'is_active' => true,
            ]),
            new HomeSlide([
                'title' => 'Peer to Peer <br /> Money Transfer',
                'description' => 'Our transactions are not limited to any particular network.',
                'button_label' => 'Get Started',
                'button_url' => '/contact',
                'image' => 'images/slider/money-1.jpeg',
                'sort_order' => 2,
                'is_active' => true,
            ]),
            new HomeSlide([
                'title' => 'Bill Payments <br /> Utilities, Pay TV',
                'description' => 'Also Fees, Tuition, Donations and Fundraising Payments.',
                'button_label' => 'Get Started',
                'button_url' => '/contact',
                'image' => 'images/slider/money-7.jpeg',
                'sort_order' => 3,
                'is_active' => true,
            ]),
            new HomeSlide([
                'title' => 'Micro Insurance <br /> payments',
                'description' => 'Payroll Direct Deposits, Point of Sale and Merchant Payments.',
                'button_label' => 'Get Started',
                'button_url' => '/contact',
                'image' => 'images/slider/money-5.jpeg',
                'sort_order' => 4,
                'is_active' => true,
            ]),
        ]);
    }
}
