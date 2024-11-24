<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// Public route for user registration
Route::post('/register', [RegisterController::class, 'create'])->name('register');

// Public route for user login
Route::post('/login', [LoginController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    // Protected route for getting the authenticated user's data
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    // Protected routes for expenses
    Route::post('/expenses', [ExpenseController::class, 'store']);
    Route::get('/expenses', [ExpenseController::class, 'index']);
});

