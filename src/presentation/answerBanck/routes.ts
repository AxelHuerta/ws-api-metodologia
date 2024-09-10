import { Router } from "express";
import { AnswerBankController } from "./controller";

export class AnswerBankRoutes {
  static get routes() {
    const router = Router();
    const answerBankController = new AnswerBankController();

    router.get("/", answerBankController.getAnswerBank);
    router.post("/", answerBankController.updateAnswerBank);
    router.get("/status", answerBankController.getStatus);
    router.post("/status", answerBankController.setStatus);

    return router;
  }
}
