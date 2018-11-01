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

<<<<<<< HEAD


Route::post('/login', 'UserController@login');


//Route::get('/isloggedin', 'UserController@isloggedin');

Route::group(['middleware' => 'AdminMiddleware'], function() {

  Route::get('/isloggedin', 'UserController@isloggedin');
  Route::post('/user_pin', 'UserController@user_pin');
  Route::get('/isloggedinComplete', 'UserController@isloggedinComplete');

});
Route::post('/logout', 'UserController@logout');
//Route::post('/logout', 'Auth\LoginController@logout');
=======
Auth::routes();
>>>>>>> dev

Route::get('/', function () {
    return view('auth.login');
});


 



Route::get('/', 'HomeController@index')->name('home');
