const express = require('express');
const app = express();

// Middleware
app.use(express.static('public'));

// Listen
app.listen(3000, () => console.log('App is running'));
