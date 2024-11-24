<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisterController;

Route::get('/', function () {
    return view('welcome');
});

Route::post('/register', [RegisterController::class, 'create'])->name('register');

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
});
