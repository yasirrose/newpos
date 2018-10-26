<?php

use Illuminate\Database\Seeder;

class PluginsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $date = new DateTime();
        DB::table('cheersadmin_plugins')->insert([
            [
                'plugin_name' => 'Single Register Price',
                'plugin_status' => '1',
                'plugin_price' => '99.99',
                'plugin_created_at' =>\Carbon\Carbon::now(),
                'plugin_updated_at' =>\Carbon\Carbon::now(),
        	],
        	[
                'plugin_name' => 'Multiple Register Price',
                'plugin_status' => '1',
                'plugin_price' => '79.00',
                'plugin_created_at' =>\Carbon\Carbon::now(),
                'plugin_updated_at' =>\Carbon\Carbon::now(),

        	],
        	[
                'plugin_name' => 'Gift Cards',
                'plugin_status' => '1',
                'plugin_price' => '99.00',
                'plugin_created_at' =>\Carbon\Carbon::now(),
                'plugin_updated_at' =>\Carbon\Carbon::now(),
        	],
        	[
                'plugin_name' => 'Customer Email & Text',
                'plugin_status' => '1',
                'plugin_price' => '79.00',
                'plugin_created_at' =>\Carbon\Carbon::now(),
                'plugin_updated_at' =>\Carbon\Carbon::now(),
        	],
        	[
                'plugin_name' => 'Shopify',
                'plugin_status' => '1',
                'plugin_price' => '5.99',
                'plugin_created_at' =>\Carbon\Carbon::now(),
                'plugin_updated_at' =>\Carbon\Carbon::now(),
        	],[
                'plugin_name' => 'Facbook & Twitter',
                'plugin_status' => '1',
                'plugin_price' => '5.99',
                'plugin_created_at' =>\Carbon\Carbon::now(),
                'plugin_updated_at' =>\Carbon\Carbon::now(),
        	],[
                'plugin_name' => 'Quickbooks',
                'plugin_status' => '1',
                'plugin_price' => '0.00',
                'plugin_created_at' =>\Carbon\Carbon::now(),
                'plugin_updated_at' =>\Carbon\Carbon::now(),
        	],[
                'plugin_name' => 'Time Clock',
                'plugin_status' => '1',
                'plugin_price' => '5.99',
                'plugin_created_at' =>\Carbon\Carbon::now(),
                'plugin_updated_at' =>\Carbon\Carbon::now(),
        	],[
                'plugin_name' => 'Whosale Online Portal Price',
                'plugin_status' => '1',
                'plugin_price' => '9.99',
                'plugin_created_at' =>\Carbon\Carbon::now(),
                'plugin_updated_at' =>\Carbon\Carbon::now(),
        	],[
                'plugin_name' => 'Wholesale Teir A: 1-5 Accts',
                'plugin_status' => '1',
                'plugin_price' => '0.00',
                'plugin_created_at' =>\Carbon\Carbon::now(),
                'plugin_updated_at' =>\Carbon\Carbon::now(),
        	],[
                'plugin_name' => 'Whoslae Teir B: 5-10 Accts',
                'plugin_status' => '1',
                'plugin_price' => '20.99',
                'plugin_created_at' =>\Carbon\Carbon::now(),
                'plugin_updated_at' =>\Carbon\Carbon::now(),
        	],[
                'plugin_name' => 'Whoslae Teir C: 10-up',
                'plugin_status' => '1',
                'plugin_price' => '30.99',
                'plugin_created_at' =>\Carbon\Carbon::now(),
                'plugin_updated_at' =>\Carbon\Carbon::now(),
        	],[
                'plugin_name' => 'Kegs, Registration, Returns',
                'plugin_status' => '1',
                'plugin_price' => '8.99',
                'plugin_created_at' =>\Carbon\Carbon::now(),
                'plugin_updated_at' =>\Carbon\Carbon::now(),
        	]
    	]);
    }
}
