import { Request, Response } from "express";
import { AnswerBankService } from "../services/answerBank.service";

export class AnswerBankController {
  constructor(private readonly answerBankService = new AnswerBankService()) {}

  // Obtener las respuestas
  public getAnswerBank = async (req: Request, res: Response) => {
    // console.log("getRound: ", this.answerBankService.getAnswers());
    res.json(this.answerBankService.getAnswers());
  };

  // Actualizar el banco de respuestas
  public updateAnswerBank = async (req: Request, res: Response) => {
    const { answerBank } = req.body;
    console.log(answerBank);
    res.json(this.answerBankService.updateAnswers(answerBank));
  };
}
