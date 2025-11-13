const mongoose = require("mongoose");
require("dotenv").config();

const db_env = process.env.DB_ENV;

const connectToDB = () => {
  mongoose.connect(`${db_env}`).then(() => {
    console.log("Database has been connected successfully.");
  });
};

module.exports = connectToDB;
