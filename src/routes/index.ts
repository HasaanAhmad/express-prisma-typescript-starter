import { Router } from "express";
import userRoutes from "./user.route";
import anythingRoutes from "./anything.route";

const router = Router();

// Define routes with their intended paths
const routes = [
  { path: "/user", route: userRoutes },
  { path: "/anything", route: anythingRoutes },
];

routes.forEach(({ path, route }) => {
  router.use(path, route);
});

export default router;
