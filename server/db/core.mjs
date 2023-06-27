import { Sequelize } from "sequelize";

// const sequelize = new Sequelize({
//     host: 'dpg-cf33hpmn6mpkr6fr67mg-a',
//     user: dbVars.user,
//     database: dbVars.database,
//     password: dbVars.password,
//     ssl: {
//       key: cKey,
//       cert: cCert,
//       ca: cCA
//     });
const sequelize = new Sequelize("postgres://postgres:fj2468fj@localhost:5432/postgres");

export { sequelize };
