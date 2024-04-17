import Config from "../config/env";

const configSequalize = {
  development: {
    username: Config.postgresUser,
    password: Config.postgresPassword,
    database: Config.postgresDatabase,
    host: Config.postgresHost,
    dialect: "postgres",
    dialectOptions: {
      supportBigNumbers: true,
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
};

export default configSequalize;
