<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    /**
     * Handle the registration logic.
     */
    public function create(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
            'monthly_budget' => 'nullable|numeric|min:0',
        ]);

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'monthly_budget' => $validated['monthly_budget'],
        ]);

        // Optional: Log the user in or redirect
        return redirect('/dashboard');
    }
}
