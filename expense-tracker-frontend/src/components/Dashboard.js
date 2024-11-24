import React, { useEffect } from "react";

const Dashboard = () => {
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            window.location.href = "/login";
        }
    }, []);

    return (
        <div>
            <h1>Welcome to your Dashboard</h1>
            <p>Here you can manage your expenses and budgets.</p>
        </div>
    );
};

export default Dashboard;