<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::group(['prefix' => 'auth'], function () {
    Route::post('login', 'AuthController@login');
    
    Route::group([ 'middleware' => 'auth:api'], function() {
        Route::post('signup', 'AuthController@signUp');
        Route::get('logout', 'AuthController@logout');
        Route::get('user', 'AuthController@user');
    });
});
Route::group(['prefix' => 'menusList'], function () {
    Route::group([ 'middleware' => 'auth:api'], function() {
        Route::get('getMenus', 'MenusModelController@index');
    });
});
Route::group(['prefix' => 'departments'], function () {
    Route::group([ 'middleware' => 'auth:api'], function() {
        Route::get('getDepartments', 'DepartmentController@index');
        Route::post('save', 'DepartmentController@store');
        Route::post('update', 'DepartmentController@update');
    });
});
Route::group(['prefix' => 'users'], function () {
    Route::group([ 'middleware' => 'auth:api'], function() {
        Route::get('/usersList', 'UsersController@index');
        Route::post('/store', 'UsersController@store');
    });
});