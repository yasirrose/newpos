<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::post('/login', 'UserController@login');


//Route::get('/isloggedin', 'UserController@isloggedin');

Route::group(['middleware' => 'AdminMiddleware'], function() {

  Route::get('/isloggedin', 'UserController@isloggedin');
  Route::post('/user_pin', 'UserController@user_pin');
  Route::get('/isloggedinComplete', 'UserController@isloggedinComplete');

  // Plugins

	Route::get('/get_plugins', 'API\Cheersadmin\PluginController@getPlugins');
	Route::post('/add_plugins', 'API\Cheersadmin\PluginController@addPlugins');
	Route::post('/update_plugins', 'API\Cheersadmin\PluginController@updatePlugins');



});
Route::post('/lockscreen', 'UserController@lockscreen');
Route::post('/logout', 'UserController@logout');
//Route::post('/logout', 'Auth\LoginController@logout');

Route::get('/', function () {
    return view('admin');
});


 



/*Route::get('/', 'HomeController@index')->name('admin');
*/