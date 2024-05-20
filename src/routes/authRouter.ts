import { Router } from "express";
import { AuthController } from "../controllers/authControllers";

const router = Router();

const authControllers = new AuthController();

router.get("/", authControllers.showLoginForm);
router.post("/", authControllers.login);

export default router;
