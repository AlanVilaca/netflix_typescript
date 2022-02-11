import dotenv from "dotenv";
dotenv.config();

const rootDir = process.env.NODE_ENV === "production" ? "dist" : "src";

export default {
  "type": process.env.DB_DIALECT,
  "host": process.env.DB_HOST,
  "port": process.env.DB_PORT,
  "username": process.env.DB_USER,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_NAME,
  "synchronize": false,
  "entities": [
    `${rootDir}/entities/*.ts`
  ],
  "migrations": [
    `${rootDir}/database/migrations/*.ts`
  ],
  "cli": {
    "migrationsDir": `${rootDir}/database/migrations`
  }
};