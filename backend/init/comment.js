const mongoose = require('mongoose');
const Comment = require('../model/comment'); // Ensure the correct path and model name
const ArtUpload = require('../model/art_model');
const User = require('../model/user'); // Ensure the path is correct

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/GetArt', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Database connected for comments!'))
  .catch((err) => console.error('Database connection error:', err));

const initComments = async () => {
    try {
        // Clear existing comments
        await Comment.deleteMany({});

        // Fetch users and art uploads
        const users = await User.find({});
        const artUploads = await ArtUpload.find({});

        // Ensure there are enough users and art uploads
        if (users.length < 2 || artUploads.length < 1) {
            throw new Error('Not enough users or art uploads in the database.');
        }

        // Prepare dummy comments
        const comments = [
            {
                content: 'Amazing work!',
                commentedBy: users[0]._id, // Directly use the ObjectId
                artId: artUploads[0]._id   // Directly use the ObjectId
            },
            {
                content: 'Love the creativity!',
                commentedBy: users[1]._id,
                artId: artUploads[0]._id
            }
        ];

        // Insert dummy comments into the database
        const insertedComments = await Comment.insertMany(comments);
        console.log('Comments inserted successfully!', insertedComments);

        process.exit();
    } catch (err) {
        console.error('Error inserting comments:', err);
        process.exit(1);
    }
};

initComments();
