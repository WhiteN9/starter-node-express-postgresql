const env = process.env.NODE_ENV || "development";
const config = require("../../knexfile")[env];
//^^ it is storing the database configuration object based on the env value;
const knex = require("knex")(config);

module.exports = knex;