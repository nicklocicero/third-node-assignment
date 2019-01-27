const path = require('path');

const express = require('express');

const usersRoutes = require('./routes/users');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(usersRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

app.listen(3000);