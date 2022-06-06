const { PORT = 5000 } = process.env;

const app = require("./app");
const listener = () => console.log(`Listening on Port ${PORT}!`);
app.listen(PORT, listener);

const database = require("./db/connection");
// database.select("*").from("foo").then(console.log).catch(console.log);