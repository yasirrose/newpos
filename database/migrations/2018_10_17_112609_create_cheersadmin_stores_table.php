<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCheersadminStoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cheersadmin_stores', function (Blueprint $table) {
            $table->increments('store_id');
            $table->string('store_name')->nullable();
            $table->string('store_password');
            $table->string('store_db_name');
            $table->string('store_user_name');
            $table->integer('store_owner');
            $table->integer('store_active');
            $table->timestamp('store_created_at')->nullable();
            $table->timestamp('store_updated_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cheersadmin_stores');
    }
}
