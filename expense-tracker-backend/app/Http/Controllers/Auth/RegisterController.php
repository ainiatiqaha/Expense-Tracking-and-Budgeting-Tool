<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash; // Make sure Hash is imported

class RegisterController extends Controller
{
    /**
     * Handle the registration logic.
     */
    public function create(Request $request)
    {
        // Validate the incoming request
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
            'monthly_budget' => 'nullable|numeric|min:0',
        ]);

        // Create a new user
        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'monthly_budget' => $validated['monthly_budget'],
        ]);

        // Return a success response with the user details
        return response()->json([
            'message' => 'User registered successfully',
            'user' => $user, // You can also remove sensitive fields like password if needed
        ], 201); // 201 status code for "Created"
    }
}
