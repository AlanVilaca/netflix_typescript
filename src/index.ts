import express from "express";
import cors from "cors";
import "reflect-metadata";
import "./database";
const app = express();

app.use(cors());

app.listen(3000, ()=>{
  console.log("listening on port 3000");
});