import { Router } from "express";
import { UserRoutes } from "./users/routes";
import { RoundRoutes } from "./rounds/routes";
import { AnswerBankRoutes } from "./answerBanck/routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/users", UserRoutes.routes);
    router.use("/api/round", RoundRoutes.routes);
    router.use("/api/answers", AnswerBankRoutes.routes);

    return router;
  }
}
