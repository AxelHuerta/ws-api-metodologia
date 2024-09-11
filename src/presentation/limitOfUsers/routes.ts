import { Router } from "express";
import { LimitOfUsersController } from "./controller";

export class LimitOfUsersRoutes {
  static get routes() {
    const router = Router();
    const limitOfUsersController = new LimitOfUsersController();

    router.get("/", limitOfUsersController.getLimitOfUsers);
    router.post("/", limitOfUsersController.setLimitOfUsers);

    return router;
  }
}
