const express = require('express');
const app = express();

// Middleware
app.use(express.static('public'));

// Route
app.get('/', function(req, res) {
  res.send('Hello!');
});

// Listen
app.listen(3000);
