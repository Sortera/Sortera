const db = require('../db/postgresDB');

userController = {};

userController.createUser = (req, res, next) => {
  const { username, password, email } = req.body;
  console.log('req.body: ', req.body);
  const text = `
    INSERT INTO users (username, password, email, TIMESTAMP)
    values($1, $2, $3, $4)
  `;
  const values = [username, password, email, Date.now()];
  db.query(text, values)
    .then(response => console.log(response))
    .catch(err => console.log(err));
  return next();
};

module.exports = userController;
