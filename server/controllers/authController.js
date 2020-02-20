const db = require('../db/postgresDB');

const authController = {};

authController.createGeneralCookie = (req, res, next) => {
  res.cookie('sortera', 'catdaveevanlukeyunho');
  res.cookie('random', Math.floor(Math.random() * 200));
  console.log('set a sortera cookie and a random cookie');
  return next();
};

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
    res.cookie('sorteraid', rows.id, { httpOnly: true });
    console.log('set a sorteraid cookie: ', rows.id);
  });
};

authController.startSession = (req, res, next) => {
  const { username } = req.body;
  const text = `
    SELECT * FROM users
    WHERE username = $1
  `;
  const values = [username];
  db.query(text, values, (err, response) => {
    if (err) return next(err);
    const userId = response.rows._id;
    const text = `
      INSERT INTO sessions (user_id, created_at)
      values($1, $2)
    `;
    const values = [userId, Date.now()];
    db.query(text, values, (err, response) => {
      if (err) return next(err);
      console.log('started a session');
      return next();
    });
  });
};

module.exports = authController;
