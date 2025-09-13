import express from "express";
import { db } from "./config/db.js";
import router from "./routes/transactionRoutes.js";
import { configDotenv } from "dotenv";
import cors from "cors";

configDotenv({ path: "./.env" });

const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

//headers

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/personalfinancetracker", router);

app.listen(PORT, () => {
  db();
  console.log(`server is conenected to db and is listening on ${PORT}`);
});
