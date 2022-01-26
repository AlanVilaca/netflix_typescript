import express from "express";
import cors from "cors";
const app = express();

console.log("Ola")

app.use(cors());

app.listen(3000, ()=>{
    console.log("listening on port 3000")
})