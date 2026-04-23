<?php

use Illuminate\Database\Seeder;

require_once __DIR__.'/PostsTableSeeder.php';
require_once __DIR__.'/TeamMembersTableSeeder.php';

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(PostsTableSeeder::class);
        $this->call(TeamMembersTableSeeder::class);
    }
}
