import { Router } from "express";

const anythingRoutes = Router();

anythingRoutes.get("/", (req, res) => {
  res.send("Hello from anything");
});

export default anythingRoutes;
