const mongoose = require('mongoose');
const Category = require('../model/category');

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/GetArt', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Database connected for categories!'))
  .catch((err) => console.error('Database connection error:', err));

const initCategories = async () => {
    try {
        // Clear existing data
        await Category.deleteMany({});
        
        // Insert dummy categories
        const categories = await Category.insertMany([
            { name: 'Art', description: 'General artworks.' },
            { name: 'Design', description: 'Design and illustration.' },
            { name: 'Painting', description: 'Traditional or digital paintings.' },
            { name: 'Photography', description: 'Photography and photo edits.' },
            { name: 'Digital Art', description: 'Digital illustrations, drawings, and designs.' }
        ]);

        console.log('Categories inserted successfully!', categories);
        process.exit();
    } catch (err) {
        console.error('Error inserting categories:', err);
        process.exit(1);
    }
};

initCategories();
