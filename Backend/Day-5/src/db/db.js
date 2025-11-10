const mongoose = require("mongoose");
require("dotenv").config();

const db_pass = process.env.DB_PASS;

const createDataBase = () => {
  mongoose.connect(`${db_pass}/cohort`).then(() => {
    console.log("Database has been connected.");
  });
};

module.exports = createDataBase;
