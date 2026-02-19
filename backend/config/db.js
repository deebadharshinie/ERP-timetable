const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME || 'nscet_timetable',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || '',
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql',
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

// Test connection
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('MySQL Connected successfully');
    
    // Sync all models with database
    // Note: This will create tables if they don't exist
    // For production, you should use migrations instead
    if (process.env.NODE_ENV === 'development') {
      // Import all models through index.js (includes associations)
      require('../models');
      
      await sequelize.sync({ alter: true });
      console.log('Database models synchronized');
    }
    
    return sequelize;
  } catch (error) {
    console.error('Error connecting to MySQL:', error.message);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };
