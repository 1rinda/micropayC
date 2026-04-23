<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateServicePagesTable extends Migration
{
    public function up()
    {
        Schema::create('service_pages', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('name');
            $table->string('page_title');
            $table->text('page_description')->nullable();
            $table->string('image')->nullable();
            $table->string('section_heading');
            $table->json('section_items');
            $table->string('extra_heading')->nullable();
            $table->json('extra_items')->nullable();
            $table->text('extra_paragraphs')->nullable();
            $table->unsignedInteger('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        DB::table('service_pages')->insert([
            [
                'slug' => 'agency-banking',
                'name' => 'Agency Banking',
                'page_title' => 'Agency Banking',
                'page_description' => 'We provide innovative electronic payment platform designed to enable multiple forms of secure e-payment methods.',
                'image' => 'images/services/agent-banking.jpeg',
                'section_heading' => "MicroPay Money Mobile Agent's key tasks",
                'section_items' => json_encode([
                    'Register Subscribers for MicroPay Mobile Money',
                    'Educate Subscribers on MicroPay Mobile Money',
                    'Deposit cash into Registered Subscribers MicroPay Mobile Money Accounts',
                    'Process cash Withdrawals for registered MicroPay Mobile Money customers',
                    'Compliance with MicroPay Mobile Money Regulations & Mobile Money business practices',
                ]),
                'extra_heading' => 'Standard Requirements',
                'extra_items' => json_encode([
                    'Prospective Agent must be a registered as a LIMITED Company that has existed for a period not less than one year.',
                    'A prospective Agent must have physical permanent or semi-permanent premises from which to operate, Counter Layout.',
                    'Copy of Certificate of Incorporation',
                    'Copy of Certified Memorandum and Articles of Association',
                    'Six months Company Bank Statement',
                    'Photocopy of Valid I.Ds of all Directors (making at least 50%) shareholding.',
                    'Registered Board OF Directors authorizing to operate Mobile Money Agency Business.',
                    "Letter of Introduction of appointed handlers from the Director's",
                    'Office Telephone Contacts',
                    'Signed Compliance Agreement',
                ]),
                'extra_paragraphs' => "Proposed outlets will be inspected by the MicroPay Representatives prior to commencement of business.\nThe agent should preferably employ 1 competent staff to manage the day to day operations of the outlet.",
                'sort_order' => 1,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'slug' => 'send-money',
                'name' => 'Sending Money',
                'page_title' => 'Sending Money',
                'page_description' => 'We provide innovative electronic payment platform designed to enable multiple forms of secure e-payment methods.',
                'image' => 'images/services/send-money.jpeg',
                'section_heading' => 'How to send money',
                'section_items' => json_encode([
                    "Go to 'Send Money' option of the menu",
                    'Input Recipient phone number(MicroPay registered and non-registered)',
                    'Input the amount to Transfer and Reason',
                    'You will see a confirmation screen to review your request',
                    "Provide your PIN and Select 'Proceed'",
                    'You will receive SMS on your handset',
                    'The recipient receives SMS on their handset',
                ]),
                'extra_heading' => null,
                'extra_items' => json_encode([]),
                'extra_paragraphs' => null,
                'sort_order' => 2,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'slug' => 'buy-airtime',
                'name' => 'Buy Airtime',
                'page_title' => 'Buy Airtime',
                'page_description' => 'We provide innovative electronic payment platform designed to enable multiple forms of secure e-payment methods.',
                'image' => 'images/services/buy-airtime.jpeg',
                'section_heading' => 'How to buy airtime',
                'section_items' => json_encode([
                    "Launch the MicroPay app and select the option 'Buy Airtime'",
                    'Select Telecom Company',
                    'Enter recipient phone number',
                    'Enter amount of airtime to buy',
                    'Confirm transaction and enter PIN',
                    'Receive SMS confirmation',
                ]),
                'extra_heading' => null,
                'extra_items' => json_encode([]),
                'extra_paragraphs' => null,
                'sort_order' => 3,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'slug' => 'cash-withdrawal',
                'name' => 'Cash Withdrawal',
                'page_title' => 'Cash Withdrawal',
                'page_description' => 'We provide innovative electronic payment platform designed to enable multiple forms of secure e-payment methods.',
                'image' => 'images/services/cash-withdrawal.jpeg',
                'section_heading' => 'How to withdraw cash',
                'section_items' => json_encode([
                    'Visit a nearby MicroPay agent',
                    'Select cash withdrawal on the app or USSD menu',
                    'Enter amount to withdraw',
                    'Confirm with your PIN',
                    'Receive cash and SMS confirmation',
                ]),
                'extra_heading' => null,
                'extra_items' => json_encode([]),
                'extra_paragraphs' => null,
                'sort_order' => 4,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'slug' => 'deposit-money',
                'name' => 'Deposit Money',
                'page_title' => 'Deposit Money',
                'page_description' => 'We provide innovative electronic payment platform designed to enable multiple forms of secure e-payment methods.',
                'image' => 'images/services/deposit-money.jpeg',
                'section_heading' => 'How to deposit money',
                'section_items' => json_encode([
                    'Visit a MicroPay Mobile Money Agent',
                    'Deposit Money to the Agent',
                    'Provide your registered mobile number',
                    'Confirm the deposit amount',
                    'Receive SMS confirmation on your handset',
                ]),
                'extra_heading' => null,
                'extra_items' => json_encode([]),
                'extra_paragraphs' => null,
                'sort_order' => 5,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'slug' => 'make-payment',
                'name' => 'Make Payments',
                'page_title' => 'Make payments',
                'page_description' => 'We provide innovative electronic payment platform designed to enable multiple forms of secure e-payment methods.',
                'image' => 'images/services/make-payment.png',
                'section_heading' => 'How to make payments or pay bills',
                'section_items' => json_encode([
                    'Go to a MicroPay Mobile Money app',
                    "Select 'Pay Bills and Buy Goods'",
                    "Select 'Utility, Pay TV or Pay Merchants and Buy Goods'",
                    'Enter Type of Bill (e.g. NWSC, UMEME, DStv/GoTV)',
                    "Input 'Biller Number' (Your customer number)",
                    "Select 'Enter Amount' and enter PIN",
                    'Confirm the recipients details and send',
                    "Receive confirmation, 'Transaction successful'",
                    'Receive SMS confirmation',
                ]),
                'extra_heading' => null,
                'extra_items' => json_encode([]),
                'extra_paragraphs' => null,
                'sort_order' => 6,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'slug' => 'request-payment',
                'name' => 'Request Payments',
                'page_title' => 'Request Payments',
                'page_description' => 'We provide innovative electronic payment platform designed to enable multiple forms of secure e-payment methods.',
                'image' => 'images/services/request-payment.png',
                'section_heading' => 'How to request payment',
                'section_items' => json_encode([
                    "Select 'Request Payment'",
                    'Enter customer number or recipient details',
                    'Enter amount to request',
                    'Add reason for the request',
                    'Confirm and send the request',
                    'Recipient receives notification and you receive confirmation',
                ]),
                'extra_heading' => null,
                'extra_items' => json_encode([]),
                'extra_paragraphs' => null,
                'sort_order' => 7,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }

    public function down()
    {
        Schema::dropIfExists('service_pages');
    }
}
