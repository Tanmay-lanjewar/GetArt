const mongoose = require('mongoose');
const User = require('../model/user');

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/GetArt', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Database connected for users!'))
  .catch((err) => console.error('Database connection error:', err));

const initUsers = async () => {
    try {
        // Clear existing data
        await User.deleteMany({});
        
        // Insert dummy users
        const users = await User.insertMany([
            { username: 'artist1', email: 'artist1@example.com', password: 'password123', bio: 'Lover of abstract art.' },
            { username: 'designer1', email: 'designer1@example.com', password: 'password123', bio: 'Graphic designer and illustrator.' },
            { username: 'painter1', email: 'painter1@example.com', password: 'password123', bio: 'Passionate about watercolor painting.' },
            { username: 'photographer1', email: 'photographer1@example.com', password: 'password123', bio: 'Capturing moments in time.' },
            { username: 'digitalartist1', email: 'digitalartist1@example.com', password: 'password123', bio: 'Digital artist focusing on character designs.' }
        ]);
        
        console.log('Users inserted successfully!', users);
        process.exit();
    } catch (err) {
        console.error('Error inserting users:', err);
        process.exit(1);
    }
};

initUsers();
