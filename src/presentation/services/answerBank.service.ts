import { WssService } from "./wss.service";

export class AnswerBankService {
  constructor(private readonly wssService = WssService.instance) {}

  private answers: string[] = [];

  // Obtener las respuestas
  public getAnswers() {
    return this.answers;
  }

  // Actualizar el banco de respuestas
  public updateAnswers(answers: string[]) {
    this.answers = answers;

    this.OnAnswersBankChanged();

    return answers;
  }

  private OnAnswersBankChanged() {
    this.wssService.sendMessage("on-answers-bank-count-changed", this.answers);
  }
}
