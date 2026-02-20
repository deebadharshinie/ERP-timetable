const { Sequelize } = require('sequelize');

// EduVertex Database (Main ERP) - Read only
const eduvertexSequelize = new Sequelize(
  process.env.EDUVERTEX_DB_NAME || 'eduvertex',
  process.env.EDUVERTEX_DB_USER || 'root',
  process.env.EDUVERTEX_DB_PASSWORD || '',
  {
    host: process.env.EDUVERTEX_DB_HOST || 'localhost',
    port: process.env.EDUVERTEX_DB_PORT || 3306,
    dialect: 'mysql',
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

// NSCET Timetable Database
const timetableSequelize = new Sequelize(
  process.env.TIMETABLE_DB_NAME || 'nscet_timetable',
  process.env.TIMETABLE_DB_USER || 'root',
  process.env.TIMETABLE_DB_PASSWORD || '',
  {
    host: process.env.TIMETABLE_DB_HOST || 'localhost',
    port: process.env.TIMETABLE_DB_PORT || 3306,
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

// Test connections
const connectDB = async () => {
  try {
    // Test EduVertex connection
    await eduvertexSequelize.authenticate();
    console.log('✓ EduVertex Database Connected successfully');
    
    // Test Timetable connection
    await timetableSequelize.authenticate();
    console.log('✓ Timetable Database Connected successfully');
    
    // Sync timetable models in development
    if (process.env.NODE_ENV === 'development') {
      require('../models');
      await timetableSequelize.sync({ alter: true });
      console.log('✓ Timetable models synchronized');
    }
    
    return { eduvertex: eduvertexSequelize, timetable: timetableSequelize };
  } catch (error) {
    console.error('Error connecting to databases:', error.message);
    process.exit(1);
  }
};

module.exports = { 
  eduvertexSequelize, 
  timetableSequelize, 
  sequelize: timetableSequelize, // Alias for backwards compatibility
  connectDB 
};
