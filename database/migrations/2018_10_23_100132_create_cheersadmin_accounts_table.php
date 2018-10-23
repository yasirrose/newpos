<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCheersadminAccountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cheersadmin_accounts', function (Blueprint $table) {
            $table->increments('account_id');
            $table->string('account_first_name')->nullable();
            $table->string('account_last_name')->nullable();
            $table->string('account_store_name')->nullable();
            $table->integer('account_user_id')->nullable(false)->change();
            $table->string('account_email')->unique();
            $table->string('account_home_phone')->nullable();
            $table->string('account_work_phone')->nullable();
            $table->string('account_address1')->nullable();
            $table->string('account_address2')->nullable();
            $table->integer('account_city')->nullable();
            $table->date('account_state')->nullable();
            $table->enum('account_country', ['Yes', 'No'])->default('No');
            $table->string('account_image')->nullable();
            $table->string('account_carrier')->nullable();
            $table->string('account_DB_name')->nullable();
            $table->timestamp('account_created_at')->nullable();
            $table->timestamp('account_updated_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cheersadmin_accounts');
    }
}
