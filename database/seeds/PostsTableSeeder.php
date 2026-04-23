<?php

use App\Post;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class PostsTableSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $posts = [
            [
                'title' => 'Improving Financial Inclusion in Uganda',
                'slug' => 'improving-financial-inclusion-uganda',
                'author' => 'MicroPay Team',
                'category' => 'FinTech',
                'image' => 'images/slider/money-1.jpeg',
                'excerpt' => 'How MicroPay is reaching the unbanked populations across the country through innovative mobile technology.',
                'content' => "Financial inclusion remains one of the most important drivers of economic participation in Uganda.\n\nMicroPay helps extend digital financial services to communities that have historically been underserved by traditional banking. Through mobile-first tools, agency banking, and accessible payment services, customers can send money, pay bills, and transact more conveniently.\n\nBy reducing barriers to access and expanding reliable service points, MicroPay supports individuals and small businesses that need practical, secure, and affordable payment options.",
                'published_at' => Carbon::parse('2026-03-15 09:00:00'),
                'is_published' => true,
            ],
            [
                'title' => 'The Benefits of Agency Banking for Small Businesses',
                'slug' => 'benefits-of-agency-banking',
                'author' => 'MicroPay Team',
                'category' => 'Banking',
                'image' => 'images/slider/money-7.jpeg',
                'excerpt' => 'Learn how becoming a MicroPay agent can boost your business revenue and serve your community.',
                'content' => "Agency banking gives small businesses an opportunity to offer useful financial services while increasing customer traffic.\n\nAs a MicroPay agent, a business can support deposits, withdrawals, registrations, and other essential transactions for nearby customers. That convenience creates repeat visits and strengthens trust within the local community.\n\nFor entrepreneurs, agency banking can become both a service channel and a practical growth strategy.",
                'published_at' => Carbon::parse('2026-04-10 09:00:00'),
                'is_published' => true,
            ],
            [
                'title' => '5 Tips for Secure Mobile Payments',
                'slug' => 'secure-mobile-payments-tips',
                'author' => 'Security Expert',
                'category' => 'Security',
                'image' => 'images/slider/money-5.jpeg',
                'excerpt' => 'Protect your wallet with these simple but effective security practices for mobile money.',
                'content' => "Secure mobile payments start with simple habits.\n\nUse a strong PIN, never share verification codes, confirm transaction details before sending money, and report suspicious activity immediately. It is also important to keep your phone secure and avoid using untrusted assistance during sensitive transactions.\n\nA few consistent precautions can significantly reduce the risk of fraud and unauthorized access.",
                'published_at' => Carbon::parse('2026-04-18 09:00:00'),
                'is_published' => true,
            ],
        ];

        foreach ($posts as $post) {
            Post::updateOrCreate(
                ['slug' => $post['slug']],
                $post
            );
        }
    }
}
