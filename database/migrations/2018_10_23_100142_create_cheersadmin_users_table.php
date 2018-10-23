<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCheersadminUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cheersadmin_users', function (Blueprint $table) {
            $table->increments('user_id');
            $table->string('user_first_name')->nullable();
            $table->string('user_last_name')->nullable();
            $table->string('user_email')->unique();
            $table->string('user_password')->nullable();
            $table->string('user_cell_phone')->nullable();
            $table->string('user_home_phone')->nullable();
            $table->string('user_work_phone')->nullable();
            $table->text('user_address1')->nullable();
            $table->text('user_address2')->nullable();
            $table->string('user_city')->nullable();
            $table->string('user_state')->nullable();
            $table->string('user_zip')->nullable();
            $table->string('user_country')->nullable();
            $table->string('user_image')->nullable();
            $table->string('user_carrier')->nullable();
            $table->integer('user_status')->default('1');
            $table->integer('user_remember_token')->nullable();
            $table->timestamp('user_created_at')->nullable();
            $table->timestamp('user_updated_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cheersadmin_users');
    }
}
