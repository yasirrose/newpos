
<?php
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('/login', 'API\UserController@login')->name('login');
Route::post('/login', 'API\UserController@login');
Route::post('/register', 'API\UserController@register');
Route::get('/get_plugins', 'API\Cheersadmin\PluginController@getPlugins');
Route::post('/add_plugins', 'API\Cheersadmin\PluginController@addPlugins');
Route::post('/update_plugins', 'API\Cheersadmin\PluginController@updatePlugins');

Route::group(['middleware' => 'auth:api'], function(){
//Route::get('/details', 'API\UserController@details');	
	//Route::post('/getPlugins', 'API\Cheersadmin\PluginController@getPlugins');
	/*Route::post('/get_plugins', function(){
		dd(1);
	});*/
});


Route::post('details', 'API\UserController@details');