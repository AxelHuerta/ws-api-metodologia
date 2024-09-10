import { WssService } from "./wss.service";

export class AnswerBankService {
  constructor(private readonly wssService = WssService.instance) {}

  private answers: string[] = [
    "Dulce",
    "Dulce",
    "Dulce",
    "Dulce",
    "Dulce",
    "Dulce",
    "Dulce",
    "Dulce",
  ];

  private status: boolean = true;

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

  // Obtener el estado del banco de respuestas
  public getStatus() {
    return this.status;
  }

  // Actualizar el estado del banco de respuestas
  public setStatus(status: boolean) {
    this.status = status;

    this.OnAnswersBankChanged();

    return status;
  }

  private OnAnswersBankChanged() {
    this.wssService.sendMessage("on-answers-bank-count-changed", this.answers);
  }
}
