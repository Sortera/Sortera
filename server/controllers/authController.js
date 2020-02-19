const db = require('../db/postgresDB');

const authController = {};

authController.createCookie = (req, res, next) => {
  res.cookie('sortera', 'catdaveevanlukeyunho');
  res.cookie('random', Math.floor(Math.rondom() * 200));
  return next();
}

authController.createUserCookie = (req, res, next) => {
  const { username } = req.body;
  const text = `
    SELECT * FROM users
    WHERE username = $1
  `;
  const values = [username];
  db.query(text, values, (err, response) => {
    if (err) return next(err);
    const { rows } = response;
    res.cookie('sorteraid', rows_id, { httpOnly: true });
  });
}