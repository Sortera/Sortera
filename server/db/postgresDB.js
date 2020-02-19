const { Pool } = require('pg');

const myURI = 'postgres://pezehgtp:WsGMfyx2ne0D4RCoSWzEvs04pS3zxdHq@rajje.db.elephantsql.com:5432/pezehgtp';

const URI = process.env.PG_URI || myURI;


const pool = new Pool({
  connectionString = URI

});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  }
};
