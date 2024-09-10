import { Router } from "express";
import { UserController } from "./controller";

export class UserRoutes {
  static get routes() {
    const router = Router();
    const userController = new UserController();

    router.get("/", userController.getUsers);
    router.post("/", userController.createUser);
    router.post("/:id", userController.updateUser);
    router.get("/limit", userController.getLimitOfUsers);
    router.post("/limit", userController.setLimitOfUsers);

    return router;
  }
}
