import { Express } from "express";
import userRoutes from "./user.routes";
import sessionRoutes from "./session.routes";
import profileRoutes from "./profile.routes";

function generalRoutes(app: Express){
  app.use(userRoutes);
  app.use(sessionRoutes);
  app.use(profileRoutes);
}

export default generalRoutes;