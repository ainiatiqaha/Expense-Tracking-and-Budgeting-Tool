const express = require("express");
const Expense = require("../models/Expense");
const router = express.Router();

// Add an Expense
router.post("/", async (req, res) => {
    const { user, amount, description, category } = req.body;
    try {
        const expense = new Expense({ user, amount, description, category });
        await expense.save();
        res.status(201).json(expense);
    } catch (error) {
        res.status(400).json({ error: "Error adding expense" });
    }
});

// Get All Expenses for a User
router.get("/:userId", async (req, res) => {
    const { userId } = req.params;
    try {
        const expenses = await Expense.find({ user: userId });
        res.json(expenses);
    } catch (error) {
        res.status(400).json({ error: "Error fetching expenses" });
    }
});

module.exports = router;