import express, { json } from "express";
import cors from "cors";
import morgan from "morgan";
import routes from "@/routes";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(json());

app.use("/api", routes);
app.use("/health", (req, res) => {
  res.send("OK");
});
export default app;
