import { Router } from "express";
import { UserController } from "../controllers/userControllers";

const router = Router();

const userController = new UserController();

router.get("/", userController.allUsers);
router.get("/:id", userController.userById);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

export default router;
