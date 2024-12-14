const express = require('express');
const router = express.Router();

// Mock database for users and their balances
let users = {
    'user1': { balance: 100 },
    'user2': { balance: 50 }
};

// Route to transfer credits
router.post('/transfer', (req, res) => {
    const { from, to, amount } = req.body;

    // Check if users exist
    if (!users[from] || !users[to]) {
        return res.status(400).json({ error: 'User not found' });
    }

    // Check if the sender has enough balance
    if (users[from].balance < amount) {
        return res.status(400).json({ error: 'Insufficient balance' });
    }

    // Perform the transfer
    users[from].balance -= amount;
    users[to].balance += amount;

    return res.status(200).json({ message: 'Transfer successful', users });
});

// Route to check balance
router.get('/balance/:userId', (req, res) => {
    const userId = req.params.userId;
    if (!users[userId]) {
        return res.status(404).json({ error: 'User not found' });
    }
    return res.status(200).json({ balance: users[userId].balance });
});

module.exports = router;
