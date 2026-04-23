<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class AddIsAdminToUsersTable extends Migration
{
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->boolean('is_admin')->default(false)->after('password');
        });

        DB::table('users')
            ->where('email', 'admin@micropay.co.ug')
            ->update(['is_admin' => true]);

        if (Schema::hasTable('home_slides')) {
            DB::table('home_slides')
                ->where('sort_order', 1)
                ->update([
                    'title' => 'Simple, secure <br>mobile money service',
                    'description' => 'Send and receive money here and beyond.',
                ]);
        }
    }

    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('is_admin');
        });
    }
}
