import express from "express";
const app = express();
import chats from "./data.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

import * as dotenv from "dotenv";
dotenv.config();

import cors from "cors";

import morgan from "morgan";

import bodyParser from "body-parser";
import userRoutes from "./Routes/userRoutes.js";

import connect from "./connection/conn.js";
app.use(
  cors({
    origin: "*",
  })
);
app.use(morgan("tiny"));
app.use(express.json());

//http://localhost:5000
app.post("/", (req, res, next) => {
  const data = req.body.name;

  console.log(data);
  res.status(200).json({ message: data || "none" });
});

app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORTT = process.env.PORT || 5000;
connect().then(() => {
  app.listen(5000, () => {
    console.log(process.env.PORT);
    console.log(`server started on http://localhost:${process.env.PORT}`);
  });
});
