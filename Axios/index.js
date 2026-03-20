import axios from "axios";
import express from "express";
import bodyParser from "body-parser";

const app = express();

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    res.render("index.ejs", { activity: response.data });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.status(500).send("failed to fetch activity.");
  }
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post("", async (req, res) => {
  try {
    const response = await axios.get(
      `https://bored-api.appbrewery.com/filter?type=${req.body.type}&participants=${req.body.participants}`,
    );
    res.render("index.ejs", { activity: response.data[Math.floor(Math.random() * response.data.length)]});
  } catch (error) {
    res.render('index.ejs', {notFound: 'no activities'});
  }
});

app.listen(3000, () => {
  console.log("Server Running on Port 3000.");
});
