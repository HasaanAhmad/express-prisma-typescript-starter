import { prisma } from "@/config/db";
import { CreateUserInput } from "@/validators/users.schema";

const userService = {
  createUser: async (data: CreateUserInput) => {
    const user = await prisma.user.create({ data });
    return user;
  },
  getUsers: async () => {
    const users = await prisma.user.findMany();
    return users;
  },
};

export default userService;
