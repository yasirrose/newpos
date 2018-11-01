<?php

namespace App\Http\Controllers\API\Cheersadmin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Cheersadmin\Plugin;

class PluginController extends Controller
{
    //


	public function getPlugins(){
		$plugins = Plugin::orderBy('plugin_created_at', 'asc')->get();
			return response()->json([
            'plugins'    => $plugins,
        ], 200);
	}

	public function addPlugins(Request $request){
		$Plugin = new Plugin;
		$Plugin->plugin_name = $request->plugin_name;
		$Plugin->plugin_price = $request->plugin_price;
		$Plugin->plugin_status = $request->plugin_status;
		$Plugin->plugin_created_at = date('Y-m-d H:i:s');
		$Plugin->plugin_updated_at = date('Y-m-d H:i:s');
		$Plugin->save();
	}

	public function updatePlugins(Request $request){
		foreach($request->pluginsdata as $plugins)
		{
			$Plugin = Plugin::where('plugin_id', $plugins['plugin_id'])->first();
			$Plugin->plugin_name = $plugins['plugin_name'];
			$Plugin->plugin_price = $plugins['plugin_price'];
			$Plugin->plugin_status = $plugins['plugin_status'];
			$Plugin->plugin_updated_at = date('Y-m-d H:i:s');
			$Plugin->save();
		}

		return response()->json([ 'message'    => "Record updated successfully"]);
	}

}
