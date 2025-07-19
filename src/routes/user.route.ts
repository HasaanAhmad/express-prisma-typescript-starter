import { Router } from "express";
import userController from "@/controllers/user.controller";

const userRoutes = Router();
userRoutes.get("/", userController.getUsers);
userRoutes.post("/", userController.createUser);

export default userRoutes;
