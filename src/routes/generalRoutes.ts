import { Express } from "express";
import userRoutes from "./user.routes";
import sessionRoutes from "./session.routes";

function generalRoutes(app: Express){
  app.use(userRoutes);
  app.use(sessionRoutes);
}

export default generalRoutes;