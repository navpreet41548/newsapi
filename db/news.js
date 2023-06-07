// import mongoose from "mongoose";
const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
  title: {
    type: String,
  },
  link: {
    type: String,
  },
  keywords: [String],
  creator: [String],
  description: {
    type: String,
  },
  pubDate: {
    type: String,
  },
  image_url: {
    type: String,
  },
});

const News = mongoose.model("News", newsSchema);

module.exports = News;
