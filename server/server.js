// this is our server
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userController = require('./controllers/userController');

app.use(bodyParser.urlencoded( {extended: true} ));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.post('/images', (req, res) => {

});

app.get('/imageTags', (req, res) => {

});

app.post('/login', userController.verifyUser, (req, res) => {
  res.redirect('/');
});

app.post('/signup', userController.checkUnique, userController.createUser, (req, res) => {
  res.status(200);
});

app.use('*', (req, res) => {
  res.status(404).send('Page Not Found');
});

app.use((err, req, res, next) => {
  res.status(500).send(`Error: ${err}`);
});

// app.get('/build/bundle.js', (req, res) => {
//   res.status(200).sendFile(path.resolve(__dirname, '../build/bundle.js'));
// });

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));