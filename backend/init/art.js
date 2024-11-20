const mongoose = require('mongoose');
const ArtUpload = require('../model/art_model');
const User = require('../model/user'); // Adjust path based on your project structure

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/GetArt', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Database connected for art uploads!'))
  .catch((err) => console.error('Database connection error:', err));

const initArtUploads = async () => {
    try {
       

        // Fetch users from the User collection
        const users = await User.find({});
        if (users.length < 5) {
            throw new Error('Not enough users in the database. Please add at least 5 users.');
        }

        // Prepare dummy art uploads
        const artUploads = [
            { title: 'Abstract Waves', description: 'Acrylic on canvas.', imageUrl: '/images/art1.jpg', category: 'Art', uploadedBy: users[0]._id },
            { title: 'Modern Logo', description: 'Vector design for branding.', imageUrl: '/images/design1.jpg', category: 'Design', uploadedBy: users[1]._id },
            { title: 'Nature’s Beauty', description: 'Oil painting of a mountain landscape.', imageUrl: '/images/art2.jpg', category: 'Painting', uploadedBy: users[2]._id },
            { title: 'Urban Jungle', description: 'Photography of a cityscape with nature elements.', imageUrl: '/images/photo1.jpg', category: 'Photography', uploadedBy: users[3]._id },
            { title: 'Cyberpunk Character', description: 'Digital illustration of a futuristic character.', imageUrl: '/images/digitalart1.jpg', category: 'Others', uploadedBy: users[4]._id },
        ];

        // Insert dummy data
        const insertedData = await ArtUpload.insertMany(artUploads);
        console.log('Art uploads inserted successfully!', insertedData);

        process.exit();
    } catch (err) {
        console.error('Error inserting art uploads:', err);
        process.exit(1);
    }
};

initArtUploads();
