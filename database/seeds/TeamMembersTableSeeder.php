<?php

use App\TeamMember;
use Illuminate\Database\Seeder;

class TeamMembersTableSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $members = [
            [
                'name' => 'Eng. Dr. John Tumuwesigyye',
                'role' => 'Non Executive Chairman',
                'bio' => 'Responsible for external and oversight matters, building partnerships, broader business relationships, government outreach, and technology through leadership. Holds a PhD in Business Administration and an MBA, with a background in Mechanical Engineering.',
                'image' => 'images/team/john.jpeg',
                'sort_order' => 1,
                'is_active' => true,
                'show_on_homepage' => true,
            ],
            [
                'name' => 'Mr. Francis Ogwang',
                'role' => 'Non Executive Member',
                'bio' => 'Country Manager East African Development Bank (EADB) Uganda, and former Head Corporate Banking at ECOBANK Uganda with exposure across 36 African countries. Brings broad banking experience from multiple roles at Centenary Bank.',
                'image' => 'images/team/francis.jpeg',
                'sort_order' => 2,
                'is_active' => true,
                'show_on_homepage' => true,
            ],
            [
                'name' => 'Mrs. Juliet Brenda Tibamwenda',
                'role' => 'Non Executive Member',
                'bio' => 'Brings extensive experience in taxation and currently works in private tax consultancy services. Previously served in multiple departments at the Uganda Revenue Authority.',
                'image' => 'images/team/juliet.jpeg',
                'sort_order' => 3,
                'is_active' => true,
                'show_on_homepage' => true,
            ],
            [
                'name' => 'Mr. Muhwezi Kahundha David',
                'role' => 'Non Executive Member',
                'bio' => 'Has over 20 years of professional experience in public administration, financial management, governance, and general administration. Served as University Secretary and Accounting Officer for Makerere University and holds an MBA and Bachelor of Commerce from Makerere University.',
                'image' => 'images/team/david.jpg',
                'sort_order' => 4,
                'is_active' => true,
                'show_on_homepage' => false,
            ],
            [
                'name' => 'Dr. Aduwo Jennifer',
                'role' => 'Non Executive Member',
                'bio' => 'Dean School of Distance Learning and Information Technology at UMI. Holds a PhD in Computer Science from Makerere University, a Masters in Computer Science from the University of Science and Technology Zimbabwe, and a Postgraduate Diploma in Computer Science from Makerere University.',
                'image' => 'images/team/jennifer.jpeg',
                'sort_order' => 5,
                'is_active' => true,
                'show_on_homepage' => false,
            ],
            [
                'name' => 'Dr. Grace Stuart Ndyareeba',
                'role' => 'C.E.O',
                'bio' => 'Has over 30 years of experience in finance, banking, corporate governance, and risk management. Responsible for daily operations, product development, and technology strategy. Holds a PhD in Business Administration, a Masters in Development Economics, and a Bachelor of Commerce degree.',
                'image' => 'images/team/grace.jpeg',
                'sort_order' => 6,
                'is_active' => true,
                'show_on_homepage' => true,
            ],
        ];

        foreach ($members as $member) {
            TeamMember::updateOrCreate(
                ['name' => $member['name']],
                $member
            );
        }
    }
}
