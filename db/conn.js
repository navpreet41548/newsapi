// const dotenv = require("dotenv");
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connection Succeeded");
  })
  .catch((error) => {
    console.log("An Error Occurred:", error);
  });
