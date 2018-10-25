<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('cheersadmin_users')->insert([
            [
                'user_first_name' => 'test',
                'user_last_name' => 'test',
                'user_email' =>'test@test.com',
                'password' => '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm',
                'user_cell_phone' =>NULL,
                'user_home_phone' =>NULL,
                'user_work_phone' =>NULL,
                'user_address1' =>'test',
                'user_address2' =>'test',
                'user_city' =>'test',
                'user_state' =>'test',
                'user_zip' =>'test',
                'user_country' =>'test',
                'user_image' =>'test',
                'user_carrier' =>'test',
                'user_status' =>1,
                'user_token' =>NULL,
                'user_remember_token' =>NULL,
                'user_created_at' =>\Carbon\Carbon::now(),
                'user_updated_at' =>\Carbon\Carbon::now(),
        	],
    	]);
    }
}
