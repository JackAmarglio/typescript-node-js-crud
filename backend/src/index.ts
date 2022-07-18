import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import routes from "./routes";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", routes);

const port = 5000;
const mongodbUrl = "mongodb://localhost:27017/simpleCrudTNRM";

mongoose.connect(
  mongodbUrl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      return console.error("Error on connect mongodb: ", err);
    }
  }
);

app.listen(port, () => console.log(`listening at http://localhost:${port}`));
