import React, { useEffect, useState } from "react";
import axios from "axios";

const ExpenseList = () => {
    const [expenses, setExpenses] = useState([]); // State to store expenses
    const [error, setError] = useState(null);     // State to store any error

    // Fetch expenses from the backend
    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8001/api/expenses");
                setExpenses(response.data); // Update state with fetched data
            } catch (err) {
                setError("Failed to fetch expenses. Please try again later.");
            }
        };

        fetchExpenses(); // Call the function on component mount
    }, []);

    if (error) {
        return <div>{error}</div>; // Display error message
    }

    return (
        <div>
            <h2>Expense List</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense) => (
                        <tr key={expense._id}>
                            <td>{expense.name}</td>
                            <td>{expense.amount}</td>
                            <td>{new Date(expense.date).toLocaleDateString()}</td>
                            <td>{expense.category}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ExpenseList;