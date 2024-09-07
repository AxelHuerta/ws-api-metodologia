import { Request, Response } from "express";
import { RoundService } from "../services/round.service";

export class RoundController {
  constructor(private readonly roundService = new RoundService()) {}

  // Obtener el número de ronda actual
  public getRound = async (req: Request, res: Response) => {
    console.log("getRound: ", this.roundService.getRound());
    res.json(this.roundService.getRound());
  };

  // Actualizar el número de ronda actual
  public updateRound = async (req: Request, res: Response) => {
    const { round } = req.body;

    console.log(round);

    res.json(this.roundService.updateRound(round));
  };

  // Obtener el estado de la ronda actual
  public getRoundStatus = async (req: Request, res: Response) => {
    res.json(this.roundService.getIsRoundInProgress());
  };

  // Cambiar el estado de la ronda actual
  public changeRoundStatus = async (req: Request, res: Response) => {
    res.json(this.roundService.changeRoundStatus());
  };
}
