<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateHomeSlidesTable extends Migration
{
    public function up()
    {
        Schema::create('home_slides', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description')->nullable();
            $table->string('button_label')->nullable();
            $table->string('button_url')->nullable();
            $table->string('image')->nullable();
            $table->unsignedInteger('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        DB::table('home_slides')->insert([
            [
                'title' => 'Simple, secure <br>mobile money service',
                'description' => 'Send & Recieve Money here and beyond.',
                'button_label' => 'Get Started',
                'button_url' => '#',
                'image' => 'images/slider/money-8.jpeg',
                'sort_order' => 1,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Peer to Peer <br /> Money Transfer',
                'description' => 'Our transactions are not limited to any particular network.',
                'button_label' => 'Get Started',
                'button_url' => '/contact',
                'image' => 'images/slider/money-1.jpeg',
                'sort_order' => 2,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Bill Payments <br /> Utilities, Pay TV',
                'description' => 'Also Fees, Tuition, Donations and Fundraising Payments.',
                'button_label' => 'Get Started',
                'button_url' => '/contact',
                'image' => 'images/slider/money-7.jpeg',
                'sort_order' => 3,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Micro Insurance <br /> payments',
                'description' => 'Payroll Direct Deposits, Point of Sale and Merchant Payments.',
                'button_label' => 'Get Started',
                'button_url' => '/contact',
                'image' => 'images/slider/money-5.jpeg',
                'sort_order' => 4,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }

    public function down()
    {
        Schema::dropIfExists('home_slides');
    }
}
