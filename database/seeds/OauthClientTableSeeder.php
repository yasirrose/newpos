<?php

use Illuminate\Database\Seeder;

class OauthClientTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('oauth_clients')->insert([
            [
                'user_id' => NULL,
                'name' => 'Laravel Personal Access Client',
                'secret' => 'GZV5Jg7wzwOvenW1NL8giy2cGgHzWSPEMkiwOWqC',
                'redirect' =>'http://localhost',
                'personal_access_client' =>1,
                'password_client' =>0,
                'revoked' =>0,
                'created_at' =>\Carbon\Carbon::now(),
                'updated_at' =>\Carbon\Carbon::now(),
        	],
        	[
                'user_id' => NULL,
                'name' => 'Personal Access Token',
                'secret' => '4kRbNGR95XVayf31TiZFPRdHPGEfrgOjX2Xi1Vd8',
                'redirect' =>'http://localhost',
                'personal_access_client' =>0,
                'password_client' =>1,
                'revoked' =>0,
                'created_at' =>\Carbon\Carbon::now(),
                'updated_at' =>\Carbon\Carbon::now(),
        	],
        	[
                'user_id' => NULL,
                'name' => 'MY APP',
                'secret' => 'Gsz2BAvtZ1bOPPqTeHPw2ZQEsNfFey8VLmT2aefg',
                'redirect' =>'http://localhost',
                'personal_access_client' =>1,
                'password_client' =>0,
                'revoked' =>0,
                'created_at' =>\Carbon\Carbon::now(),
                'updated_at' =>\Carbon\Carbon::now(),
        	],
    	]);
    }
}
