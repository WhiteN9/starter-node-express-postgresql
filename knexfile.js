const path = require("path"); //specifying a storage location for migration
require("dotenv").config();
const { DATABASE_URL } = process.env;

module.exports = {
  development: {
    client: "postgresql",
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: "./src/db/seeds",
      //same
      // directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },
};
//migrations must be plural
//must be inside the development configuration object
