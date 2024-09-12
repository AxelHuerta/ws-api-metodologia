import { Router } from "express";
import { UserController } from "./controller";

export class UserRoutes {
  static get routes() {
    const router = Router();
    const userController = new UserController();

    router.get("/", userController.getUsers);
    router.post("/", userController.createUser);
    router.get("/limit", userController.getLimitOfUsers);
    router.post("/limit", userController.setLimitOfUsers);
    router.post("/save", userController.saveUsers);
    router.post("/clean-users-array", userController.cleanUsersArray);
    router.post("/:id", userController.updateUser);

    return router;
  }
}
