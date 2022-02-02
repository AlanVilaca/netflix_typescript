import * as dotenv from "dotenv";
dotenv.config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

import express from "express";
import cors from "cors";
import "reflect-metadata";
import "./database";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import generalRoutes from "./routes/generalRoutes";
generalRoutes(app);

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});