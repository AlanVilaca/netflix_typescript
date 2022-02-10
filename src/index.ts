import "dotenv/config";
import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import cors from "cors";
const app = express();

// connection to database
import "./database";

// enable cors
app.use(cors());

// permit read json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//static routes to load photos
import uploadConfig from "./config/uploadConfig";
app.use("/files", express.static(uploadConfig.directory));

// load routes
import generalRoutes from "./routes/generalRoutes";
generalRoutes(app);


// load error in requests
import AppError from "./errors/AppError";
app.use(
  (error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        status: "error",
        message: error.message
      });
    }

    console.log(error);

    return res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  },
);

// create port
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});