const mongoose = require('mongoose');

// User schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    balance: { type: Number, default: 0 }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
