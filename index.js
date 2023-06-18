// // import express from "express";
// // import fetch from "node-fetch";
// // import cron from "node-cron";
// // import News from "./db/news.js";
// // import "./db/conn.js";
// // import mongoose from "mongoose";

const express = require("express");
// const fetch = require("node-fetch");
const cron = require("node-cron");
const News = require("./db/news");
require("./db/conn.js");
const mongoose = require("mongoose");
const fetch = require("isomorphic-fetch");
const cors = require("cors");

// const app = express();

// let nextPage = "";
// let newsData = [];

// app.use(cors());

// app.get("/", (req, res) => {
//   res.send("Hello world!!");
// });

// // cron.schedule("0 */2 * * *", async () => {
// cron.schedule("*/50 * * * * *", async () => {
//   console.log("5 Sec");
//   mongoose.connection.db.collection("news").deleteMany({}, (error, result) => {
//     if (error) {
//       console.error("Error deleting documents:", error);
//     } else {
//       console.log(
//         `${result.deletedCount} documents deleted from ${collectionName}`
//       );
//     }
//   });

//   const ress = await fetch(
//     "https://newsdata.io/api/1/news?apikey=pub_2256356c6bcdfe6fd08b0e0c43e96530ba7a2&q=technology&language=en&category=science,technology "
//   );
//   const data = await ress.json();
//   newsData.push(data);
//   nextPage = data.nextPage;
//   //   while (nextPage !== "") {
//   let n = 1;
//   while (n <= 6) {
//     // res.redirect(`/updateNews/${data.nextPage}`);
//     const nextPageData = await fetch(
//       `https://newsdata.io/api/1/news?apikey=pub_2256356c6bcdfe6fd08b0e0c43e96530ba7a2&q=technology&language=en&category=science,technology&page=${nextPage}`
//     );
//     const newData = await nextPageData.json();
//     nextPage = newData.nextPage;
//     newsData = [...newsData, ...newData.results];
//     n++;
//   }
//   console.log("All Data fetched");
//   addDataToDb(newsData);
// });

// const addDataToDb = async (newsData) => {
//   for (let i = 0; i < newsData.length; i++) {
//     const element = newsData[i];
//     const news = new News({
//       title: element.title,
//       link: element.link,
//       keyword: element.keyword,
//       creator: element.creator,
//       description: element.description,
//       pubDate: element.pubDate,
//       image_url: element.image_url,
//     });
//     const savedNews = await news.save();
//     console.log(savedNews);
//   }
// };

// app.get("/getNews", async (req, res) => {
//   try {
//     // let limit = req.query.limit;
//     // let page = req.query.page;

//     // if (limit <= 0) {
//     //   res.json({ news: null, err: "limit can't be less than 1" });
//     // }
//     // if (page < 1) {
//     //   res.json({ news: null, err: "Page can't be less than 1" });
//     // }

//     // const news = await News.find({})
//     //   .skip(page * limit)
//     //   .limit(limit);
//     const news = await News.find({});
//     res.json({ news });
//   } catch (err) {
//     res.json({ err: err.message, news: null });
//   }
// });

// // user
// // CQ1TYAhiN2luPCw3

// // http://localhost/getNews?page=5&limit=10

// // app.get("/updateNews", async (req, res) => {
// //   const ress = await fetch(
// //     "https://newsdata.io/api/1/news?apikey=pub_2256356c6bcdfe6fd08b0e0c43e96530ba7a2&q=artificial%20intelligence&language=en&category=science,technology "
// //   );
// //   const data = await ress.json();
// //   newsData.push(data);
// //   nextPage = data.nextPage;
// //   //   while (nextPage !== "") {
// //   let n = 1;
// //   while (n <= 0) {
// //     // res.redirect(`/updateNews/${data.nextPage}`);
// //     const nextPageData = await fetch(
// //       `https://newsdata.io/api/1/news?apikey=pub_2256356c6bcdfe6fd08b0e0c43e96530ba7a2&q=artificial%20intelligence&language=en&category=science,technology&page=${nextPage}`
// //     );
// //     const newData = await nextPageData.json();
// //     nextPage = newData.nextPage;
// //     newsData.push(newData);
// //     n++;
// //   }
// //   res.json(newsData);
// //   console.log("All Data fetched");
// // });
// // app.get("/updateNews/:nextPage", async (req, res) => {
// //   const ress = await fetch();
// //   `https://newsdata.io/api/1/news?apikey=pub_2256356c6bcdfe6fd08b0e0c43e96530ba7a2&q=artificial%20intelligence&language=en&category=science,technology&page=${req.params.nextPage}`;
// //   const data = await ress.json();
// //   console.log(data);
// //   newsData.push(data);
// //   res.send(req.params.nextPage);
// // });

// app.listen("80", () => {
//   console.log("Server is running");
// });

// const express = require("express");
// const cron = require("node-cron");
// const News = require("./db/news");
// require("./db/conn.js");
// const mongoose = require("mongoose");
// const fetch = require("node-fetch");
// const cors = require("cors");

const app = express();

let nextPage = "";
let newsData = [];

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world!!");
});

cron.schedule("*/50 * * * * *", async () => {
  console.log("5 Sec");
  mongoose.connection.db.collection("news").deleteMany({}, (error, result) => {
    if (error) {
      console.error("Error deleting documents:", error);
    } else {
      console.log(`${result.deletedCount} documents deleted`);
    }
  });

  const ress = await fetch(
    "https://newsdata.io/api/1/news?apikey=pub_2256356c6bcdfe6fd08b0e0c43e96530ba7a2&q=technology&language=en&category=science,technology"
  );
  const data = await ress.json();
  newsData.push(data);
  nextPage = data.nextPage;

  let n = 1;
  while (n <= 6) {
    const nextPageData = await fetch(
      `https://newsdata.io/api/1/news?apikey=pub_2256356c6bcdfe6fd08b0e0c43e96530ba7a2&q=technology&language=en&category=science,technology&page=${nextPage}`
    );
    const newData = await nextPageData.json();
    nextPage = newData.nextPage;
    newsData = [...newsData, ...newData.results];
    n++;
  }
  console.log("All Data fetched");
  addDataToDb(newsData);
});

const addDataToDb = async (newsData) => {
  for (let i = 0; i < newsData.length; i++) {
    const element = newsData[i];
    const news = new News({
      title: element.title,
      link: element.link,
      keyword: element.keyword,
      creator: element.creator,
      description: element.description,
      pubDate: element.pubDate,
      image_url: element.image_url,
    });
    const savedNews = await news.save();
    console.log(savedNews);
  }
};

app.get("/getNews", async (req, res) => {
  try {
    const news = await News.find({});
    res.json({ news });
  } catch (err) {
    res.json({ err: err.message, news: null });
  }
});

app.listen("80", () => {
  console.log("Server is running");
});
