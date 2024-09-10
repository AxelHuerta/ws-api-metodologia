import { Request, Response } from "express";
import { AnswerBankService } from "../services/answerBank.service";

export class AnswerBankController {
  constructor(private readonly answerBankService = new AnswerBankService()) {}

  // Obtener las respuestas
  public getAnswerBank = async (_req: Request, res: Response) => {
    res.json(this.answerBankService.getAnswers());
  };

  // Actualizar el banco de respuestas
  public updateAnswerBank = async (req: Request, res: Response) => {
    const { answerBank } = req.body;
    res.json(this.answerBankService.updateAnswers(answerBank));
  };

  // Obtener el estado del banco de respuestas
  public getStatus = async (_req: Request, res: Response) => {
    res.json(this.answerBankService.getStatus());
  };

  // Actualizar el estado del banco de respuestas
  public setStatus = async (req: Request, res: Response) => {
    const { status } = req.body;
    console.log("status: ", status);
    res.json(this.answerBankService.setStatus(status));
  };
}
