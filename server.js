// Import Express.js
const express = require('express');

// Initialize an instance of Express.js
const app = express();

// Specify on which port the Express.js server will run 
const PORT = process.env.PORT || 3001;


const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// Static middleware pointing to the public folder
app.use(express.static('public'));


// listen() method is responsible for listening for incoming connections on the specified port 
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});