import express, { Express } from "express";

import { Model } from "objection";
import { config } from "dotenv";

config();

import knexInstance from "./db";
import router from "./routes";
import path from "path";

const PORT = process.env.PORT || 3000;
const app: Express = express();

Model.knex(knexInstance);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../public/views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

app.use((req, res) => {
  res.status(404).json({
    code: 404,
    status: "error",
    message: "Route not found",
    data: null,
  });
});

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
