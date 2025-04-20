const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Middleware to serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Import and use the routes defined in routes/users.js
const userRoutes = require('./routes/users');
app.use('/users', userRoutes);

// Define a basic route
app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
