import { Request, Response } from "express";
import userService from "@/services/users.service";

const userController = {
  createUser: async (req: Request, res: Response) => {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  },
  getUsers: async (req: Request, res: Response) => {
    const users = await userService.getUsers();
    res.status(200).json(users);
  },
};

export default userController;
