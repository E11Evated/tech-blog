// Import the Sequelize package
const Sequelize = require('sequelize');

// Load environment variables from .env file
require('dotenv').config();

// Create a new Sequelize instance, using either JawsDB URL or local MySQL database credentials
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL) // Use JawsDB URL if it exists
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost', // Hostname of MySQL server
    dialect: 'mysql', // Use MySQL as the database management system
    port: 3306 // Port number of MySQL server
  });

// Export the sequelize instance
module.exports = sequelize;