import express from "express";
import cors from "cors";
import "reflect-metadata";
import "./database";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

import generalRoutes from "./routes/generalRoutes";
generalRoutes(app);

app.listen(3000, ()=>{
  console.log("listening on port 3000");
});