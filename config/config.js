require('dotenv').config();

module.exports = {
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres',
    dialectOptions: {
      supportBigNumbers: true,
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
  // Другие настройки (например, для production и т. д.)
};
