<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\User;

class LoginController extends Controller
{
    /**
     * Handle an incoming login request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        // Validate the incoming request
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        // If validation fails, return a validation error response
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Attempt to authenticate the user
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            // If authentication is successful, create a Sanctum token
            $user = Auth::user();
            $token = $user->createToken('YourAppName')->plainTextToken; // You can replace 'YourAppName' with your app name

            // Return the user data and the token
            return response()->json([
                'user' => $user,
                'token' => $token,
            ], 200);
        }

        // If authentication fails, return an unauthorized response
        return response()->json(['message' => 'Unauthorized'], 401);
    }
}
