const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, { useNewUrlParser: true });

        console.log('database connected')

    }
    catch (err) {
        console.log(err);
        process.exit(1)// Stop the app
    }

}

module.exports = connectDB;