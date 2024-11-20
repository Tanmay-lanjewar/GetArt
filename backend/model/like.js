const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
    artId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ArtUpload',
        required: true
    },
    likedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('Like', likeSchema);
