<?php

use Illuminate\Database\Seeder;

class OauthPersonalAccessClientTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         DB::table('oauth_personal_access_clients')->insert([
            [
                'client_id' => 3,
                'created_at' =>\Carbon\Carbon::now(),
                'updated_at' =>\Carbon\Carbon::now(),
        	],
    	]);
    }
}
