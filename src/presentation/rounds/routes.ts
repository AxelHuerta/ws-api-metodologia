import { Router } from "express";
import { RoundController } from "./controller";

export class RoundRoutes {
  static get routes() {
    const router = Router();
    const roundController = new RoundController();

    router.get("/", roundController.getRound);
    router.post("/", roundController.updateRound);
    router.get("/status", roundController.getRoundStatus);
    router.post("/status", roundController.changeRoundStatus);

    return router;
  }
}
