const mongoose = require("mongoose");
require("dotenv").config();

const DB_ENV = process.env.DB_ENV;

const connectToDB = () => {
  mongoose.connect(`${DB_ENV}`).then(() => {
    console.log("Database has been connected successfully!");
  });
};

module.exports = connectToDB;
