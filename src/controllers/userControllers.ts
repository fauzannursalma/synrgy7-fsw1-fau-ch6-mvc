import { Response, Request } from "express";
import { UserModel } from "../db/models/users";

export class UserController {
  userList = async (req: Request, res: Response) => {
    try {
      const users = await UserModel.query();
      return res.status(200).json({
        code: 200,
        status: "success",
        message: "User list",
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

  userDetail = async (req: Request, res: Response) => {
    try {
      const user = await UserModel.query().findById(req.params.id);
      return res.status(200).json({
        code: 200,
        status: "success",
        message: "User detail",
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

  userCreate = async (req: Request, res: Response) => {
    try {
      const user = await UserModel.query().insert(req.body);
      return res.status(201).json({
        code: 201,
        status: "success",
        message: "User created",
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

  userUpdate = async (req: Request, res: Response) => {
    try {
      const user = await UserModel.query().findById(req.params.id);
      if (!user) {
        return res.status(404).json({
          code: 404,
          status: "error",
          message: "User not found",
          data: null,
        });
      } else {
        await UserModel.query().findById(req.params.id).patch(req.body);
        return res.status(200).json({
          code: 200,
          status: "success",
          message: "User updated",
          data: user,
        });
      }
    } catch (error) {
      return res.status(500).json({
        code: 500,
        status: "error",
        message: "Internal Server Error",
        data: null,
      });
    }
  };

  userDelete = async (req: Request, res: Response) => {
    try {
      const user = await UserModel.query().findById(req.params.id);
      if (!user) {
        return res.status(404).json({
          code: 404,
          status: "error",
          message: "User not found",
          data: null,
        });
      } else {
        await UserModel.query().deleteById(req.params.id);
        return res.status(200).json({
          code: 200,
          status: "success",
          message: "User deleted",
          data: user,
        });
      }
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
