const express = require("express");
const Sequelize = require("sequelize");
const app = express();
const dotenv = require("dotenv");

//db coonection
require("./config/db");

//dotenv config
dotenv.config({ path: "./config/config.env" });

//accept JSON
app.use(express.json());

//Mount route
const routes = require("./router/User");
const errorHandler = require("./middleware/eroorHandler");

app.use("", routes);

app.use(errorHandler);

//server connection
const PORT = process.env.PORT;
app.listen(PORT, console.log(`Server running in ${process.env.PORT}`));
