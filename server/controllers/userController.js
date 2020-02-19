const db = require('../db/postgresDB');

const userController = {};

userController.checkUnique = (req, res, next) => {
  const { username, email } = req.body;
  const text = `
    SELECT * FROM users
    WHERE username = $1 OR email = $2
  `;
  const values = [username, email];
  db.query(text, values, (err, response) => {
    if (err) return next(err);
    const { rows } = response;
    if (rows !== null) {
      res.redirect('/signup');
    }
    return next();
  });
};

userController.createUser = (req, res, next) => {
  const { username, password, email } = req.body;
  console.log('req.body: ', req.body);
  const text = `
    INSERT INTO users (username, password, email, downloads)
    values($1, $2, $3, $4)
  `;
  const values = [username, password, email, 0];
  db.query(text, values)
    .then(response => console.log(response))
    .catch(err => console.log(err));
  return next();
};

userController.verifyUser = (req, res, next) => {
  const { username, password } = req.body;
  const text = `
    SELECT * FROM users
    WHERE username = $1 AND password = $2
  `;
  const values = [username, password];
  db.query(text, values, (err, response) => {
    if (err) return next(err);
    const { rows } = response;
    if (rows !== null) {
      return next();
    }
    return res.redirect('/signup');
  });
};

module.exports = userController;
