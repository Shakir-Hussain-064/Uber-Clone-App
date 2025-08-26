const mongoose = require('mongoose');

async function connectToDb() {    
    await mongoose.connect(process.env.DB_CONNECT, {
        useNewUrlParser : true,
        useUnifiedTopology:true,
                
    }).then(() => {
        console.log('Connected to DB');
    }).catch(err => {
        console.error('Database connection error:', err.message);
    });
}

module.exports = connectToDb; 