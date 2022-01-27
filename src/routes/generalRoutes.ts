import { Express } from "express";
import userRoutes from "./user";

function generalRoutes(app: Express){
  app.use(userRoutes);
}

export default generalRoutes;