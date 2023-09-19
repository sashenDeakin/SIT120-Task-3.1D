import cors from "cors";
import express from "express";
import mongoose from "mongoose";

import messageData from "./model/message.model.js";

const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());

const connection_Url =
  "mongodb+srv://sashenjayathilaka95:KOp3YDfJbgXfqyOy@cluster0.dbvlvaf.mongodb.net/news-app";

mongoose
  .connect(connection_Url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => console.log(err));

mongoose.connection.once("open", () => {
  console.log("Db CONNECTED");
});

app.get("/", (req, res) => res.status(200).send("News App Build"));

app.post("/save/message", async (req, res) => {
  try {
    await messageData.create({
      name: req.body.name,
      email: req.body.email,
      number: req.body.number,
      message: req.body.message,
    });
    res.json({ status: "ok" });
  } catch (error) {
    return res.json({ status: "error", error: error.message });
  }
});

app.listen(port, () => console.log(`listen on localhost:${port}`));
