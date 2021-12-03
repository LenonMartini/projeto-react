<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CompanyController;

Route::get('/ping', function(){

    return ['pong' => true];

});
Route::get('/401', [AuthController::class, 'unauthorized'])->name('login');


Route::post('/auth/login', [AuthController::class, 'login']);
Route::post('/auth/register', [AuthController::class, 'register']);

Route::middleware('auth:api')->group(function(){

    Route::post('/auth/validate', [AuthController::class, 'validateToken']);
    Route::post('/auth/logout', [AuthController::class, 'logout']);

    /*Companies*/
    Route::get('/companies', [CompanyController::class, 'getAll']);
    
});