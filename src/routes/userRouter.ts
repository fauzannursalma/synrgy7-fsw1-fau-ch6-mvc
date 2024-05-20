import { Router } from "express";
import { UserController } from "../controllers/userControllers";

const router = Router();

const userController = new UserController();

router.get("/", userController.userList);
router.get("/:id", userController.userDetail);
router.post("/", userController.userCreate);
router.put("/:id", userController.userUpdate);
router.delete("/:id", userController.userDelete);

export default router;
