const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String, // URL to the user's profile picture
        required: false
    },
    bio: {
        type: String,
        required: false,
        trim: true
    },
    joinedDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);
