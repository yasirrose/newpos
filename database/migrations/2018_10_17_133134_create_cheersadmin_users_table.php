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
            $table->string('user_fname')->nullable();
            $table->string('user_lname')->nullable();
            $table->string('user_email')->nullable();
            $table->string('user_password')->nullable();
            $table->string('user_phone')->nullable();
            $table->string('user_type')->nullable();
            $table->string('user_referral_id')->nullable();
            $table->unsignedInteger('user_career_id')->nullable();
            $table->tinyinteger('user_is_active')->nullable();
            $table->tinyinteger('user_is_trial')->nullable();
            $table->string('user_cfd_ad1')->nullable();
            $table->string('user_cfd_ad2')->nullable();
            $table->string('user_cfd_ad3')->nullable();
            $table->string('user_cfd_video1')->nullable();
            $table->string('user_cfd_video2')->nullable();
            $table->string('user_cfd_video3')->nullable();
            $table->string('user_cfd_video_active')->nullable();
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
