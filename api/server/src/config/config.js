require('dotenv').config();

module.exports =  {
  // using online database
  //development: {
  //   use_env_variable: 'DATABASE_URL'
  // },
  "development": {
    "username": "steven",
    "password": null,
    "database": "books",
    "host": "127.0.0.1",
    "dialect": "postgres",
  },
  "test": {
    "username": "steven",
    "password": null,
    "database": "book_test",
    "host": "127.0.0.1",
    "dialect": "postgres",
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "postgres",
  }
};
