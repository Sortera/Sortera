const db = require('../db/postgresDB');

dbController = {};

dbController.createUser = (req, res, next) => {
  const { username, password } = req.body;
  console.log('req.body: ', req.body);
  const text = `
      INSERT INTO users (username, password, TIMESTAMP)
      values($1, $2, $3)
    `;
  const values = [username, password, Date.now()];
  db.query(text, values)
    .then(response => console.log(response))
    .catch(err => console.log(err));
  return next();
};

module.exports = dbController;
