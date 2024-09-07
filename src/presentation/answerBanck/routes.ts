import { Router } from "express";
import { AnswerBankController } from "./controller";

export class AnswerBankRoutes {
  static get routes() {
    const router = Router();
    const roundController = new AnswerBankController();

    router.get("/", roundController.getAnswerBank);
    router.post("/", roundController.updateAnswerBank);

    return router;
  }
}
