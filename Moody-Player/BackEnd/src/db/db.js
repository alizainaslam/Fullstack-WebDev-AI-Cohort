import mongoose from "mongoose";
const db_url = process.env.DB_URL;

const connectToDB = () => {
  mongoose
    .connect(db_url)
    .then(() => {
      console.log("Database connected successfully!");
    })
    .catch(() => {
      console.log("Something has been wrong!");
    });
};

export default connectToDB;
