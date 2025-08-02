const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes'); 
const captainRoutes = require('./routes/captain.routes'); // Assuming you have a captain.routes.js file

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/users', userRoutes);
app.use('/captains', captainRoutes); // Assuming you have a captain.routes.js file


app.get('/', (req, res) => {
    res.send('Hello World!'); 
});





module.exports = app;