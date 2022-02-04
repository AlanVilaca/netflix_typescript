import * as dotenv from "dotenv";
dotenv.config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

import "reflect-metadata";
import express, { Request, Response } from "express";
import cors from "cors";
const app = express();

// connection to database
import "./database";

// enable cors
app.use(cors());

// permit read json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// load routes
import generalRoutes from "./routes/generalRoutes";
generalRoutes(app);


// load error in requests
import AppError from "./errors/AppError";
app.use(
  (error: Error, request: Request, response: Response) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: "error",
        message: error.message,
      });
    }

    console.log(error);

    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  },
);

// create port
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});