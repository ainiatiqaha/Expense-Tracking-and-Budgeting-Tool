import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const {email, setEmail} = useState("");
    const {password, setPassword} = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://127.0.0.1:8001/api/login", {email, password});
            localStorage.setItem("token", response.data.token);
            navigate("/dashboard");
        } catch (error) {
            alert("Login failed. Please check your credentials.");
        }
    };

  return (
    <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>

    </div>
  )
}

export default Login;