const path = require("path"); //specifying a storage location for migration

require("dotenv").config(); 
// load all env vars inside .env file into the environment

const { DATABASE_URL } = process.env;

module.exports = {
  // Define the database configuration object, in this case, it is a development configuration object
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
