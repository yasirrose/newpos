<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                'name' => 'Admin',
                'email' =>'edgar.rada@gmail.com',
                'password' =>Hash::make('edgar@123'),
                'admin' =>1,
                'user_pin' =>'123456'
        	],
    	]);
    }
}
