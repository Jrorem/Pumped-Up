require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

// Get the database connection details from the environment variable
const dbUrl = process.env.DATABASE_URL;

// Create the MySQL connection pool
const pool = mysql.createPool(dbUrl);

// Use the pool to execute queries
pool.query('SELECT * FROM your_table', (error, results) => {
  // Handle the query results
});

module.exports = sequelize;