<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCheersadminPluginsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cheersadmin_plugins', function (Blueprint $table) {
            $table->increments('plugin_id');
            $table->string('plugin_name')->nullable();
            $table->string('plugin_status')->nullable();
            $table->double('plugin_price')->nullable();
            $table->timestamp('plugin_created_at')->nullable();
            $table->timestamp('plugin_updated_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cheersadmin_plugins');

    }
}