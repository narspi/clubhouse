import { Sequelize } from "sequelize";

import { from, logger } from "env-var";

const env = from(process.env, {}, logger);
const url = env.get("POSTGRES_URL_NO_SSL").required().asString();

const sequelize = new Sequelize(url, {
  dialect: "postgres",
  protocol: "postgres",
  dialectOptions: {
    supportBigNumbers: true,
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

export default sequelize;
