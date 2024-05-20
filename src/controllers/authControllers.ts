import { Request, Response } from "express";
import { UserModel } from "../db/models/users";

export class AuthController {
  showLoginForm = (req: Request, res: Response) => {
    res.render("login");
  };

  login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const user = await UserModel.query().findOne({
        email: email,
        password: password,
      });
      if (user) {
        return res.status(200).json({
          code: 200,
          status: "success",
          message: "Login success",
          data: user,
        });
      } else {
        return res.status(400).json({
          code: 400,
          status: "error",
          message: "Email or password is wrong",
          data: null,
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
