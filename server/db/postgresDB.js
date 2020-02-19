const { Pool } = require('pg');
const pgURI =
  'postgres://pezehgtp:WsGMfyx2ne0D4RCoSWzEvs04pS3zxdHq@rajje.db.elephantsql.com:5432/pezehgtp';

const pool = new Pool({
  connectionString: pgURI
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  }
};
