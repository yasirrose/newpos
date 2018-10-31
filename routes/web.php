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
Route::post('/user_pin', 'UserController@user_pin');
Route::get('/isloggedin', 'UserController@isloggedin');
Route::post('/logout', 'Auth\LoginController@logout');

Route::get('/', function () {
    return view('admin');
});


 



/*Route::get('/', 'HomeController@index')->name('admin');
*/