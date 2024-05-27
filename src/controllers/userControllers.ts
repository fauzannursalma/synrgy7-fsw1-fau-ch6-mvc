import { Response, Request } from "express";
import { userService } from "../services/userServices";

export class UserController {
  userById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const user = await userService.getUserById(id);
      return res.status(200).json({
        code: 200,
        status: "success",
        message: "User found",
        data: user,
      });
    } catch (error) {
      return res.status(500).json({
        code: 500,
        status: "error",
        message: "Internal Server Error",
        data: null,
      });
    }
  };

  userByEmail = async (req: Request, res: Response) => {
    const { email } = req.params;
    try {
      const user = await userService.getUserByEmail(email);
      return res.status(200).json({
        code: 200,
        status: "success",
        message: "User found",
        data: user,
      });
    } catch (error) {
      return res.status(500).json({
        code: 500,
        status: "error",
        message: "Internal Server Error",
        data: null,
      });
    }
  };

  allUsers = async (req: Request, res: Response) => {
    try {
      const users = await userService.getAllUsers();
      return res.status(200).json({
        code: 200,
        status: "success",
        message: "All users",
        data: users,
      });
    } catch (error) {
      return res.status(500).json({
        code: 500,
        status: "error",
        message: "Internal Server Error",
        data: null,
      });
    }
  };

  createUser = async (req: Request, res: Response) => {
    const user = req.body;
    try {
      const newUser = await userService.createUser(user);
      return res.status(200).json({
        code: 200,
        status: "success",
        message: "User created",
        data: newUser,
      });
    } catch (error) {
      return res.status(500).json({
        code: 500,
        status: "error",
        message: "Internal Server Error",
        data: null,
      });
    }
  };

  updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = req.body;
    try {
      const updatedUser = await userService.updateUser(id, user);
      return res.status(200).json({
        code: 200,
        status: "success",
        message: "User updated",
        data: updatedUser,
      });
    } catch (error) {
      return res.status(500).json({
        code: 500,
        status: "error",
        message: "Internal Server Error",
        data: null,
      });
    }
  };

  deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await userService.deleteUser(id);
      return res.status(200).json({
        code: 200,
        status: "success",
        message: "User deleted",
        data: null,
      });
    } catch (error) {
      return res.status(500).json({
        code: 500,
        status: "error",
        message: "Internal Server Error",
        data: null,
      });
    }
  };
}
