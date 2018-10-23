<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCheersadminUserPluginsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cheersadmin_user_plugins', function (Blueprint $table) {
            $table->increments('user_plugins_id');
            $table->integer('user_plugins_plugin_id')->nullable(false)->change();
            $table->integer('user_plugin_account_id')->nullable(false)->change();
            $table->timestamp('user_plugin_created_at')->nullable();
            $table->timestamp('user_plugin_updated_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cheersadmin_user_plugins');
    }
}
