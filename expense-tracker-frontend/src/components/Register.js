import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API from "../api"; // Adjust the path based on your file structure

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");
    const [monthly_budget, setMonthlyBudget] = useState(0);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            // Send a POST request to the backend
            const response = await API.post("/register", {
                name,
                email,
                password,
                password_confirmation,
                monthly_budget,
            });

            console.log(response.data); // Check the backend response
            navigate("/login"); // Redirect to login page
        } catch (error) {
            console.error(error.response.data); // Log any errors from the backend
            alert("Registration failed. Please try again.");
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" value={password_confirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
                </div>
                <div>
                    <label>Monthly Budget:</label>
                    <input type="number" value={monthly_budget} onChange={(e) => setMonthlyBudget(e.target.value)} />
                </div>
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    );
};


export default Register