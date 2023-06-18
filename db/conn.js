const dotenv = require("dotenv");
const mongoose = require("mongoose");
// import dotenv from "dotenv";
// import mongoose from "mongoose";

dotenv.config();
mongoose
  .connect("mongodb+srv://user:CQ1TYAhiN2luPCw3@cluster0.u00aums.mongodb.net", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connection Succeeded");
  })
  .catch((error) => {
    console.log("An Error Occurred:", error);
  });
