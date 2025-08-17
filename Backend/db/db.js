const mongoose = require('mongoose');

function connectToDb() {    
    mongoose.connect(process.env.DB_CONNECT, {
        // useNewUrlParser: true,
        useUnifiedTopology: true,
        connectTimeoutMS: 10000, // Increase timeout to 10 seconds
        socketTimeoutMS: 45000  // Increase socket timeout
    }).then(() => {
        console.log('Connected to DB');
    }).catch(err => {
        console.error('Database connection error:', err.message);
    });
}

module.exports = connectToDb;