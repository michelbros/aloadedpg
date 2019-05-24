const express = require('express');
const app = express();

// Serve the public static files
app.use(express.static('public'));

// Listen
app.listen(3000, () => console.log('App is running'));
