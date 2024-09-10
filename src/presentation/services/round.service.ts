import { WssService } from "./wss.service";

export class RoundService {
  constructor(private readonly wssService = WssService.instance) {}

  private round: number = 0;
  private isRoundInProgress: boolean = false;

  // Obtener el número de ronda actual
  public getRound() {
    return this.round;
  }

  // Actualizar el número de ronda actual
  public updateRound(round: number) {
    this.round = round;

    this.OnRoundChanged();

    return round;
  }

  // Obtener el estado de la ronda actual
  public getIsRoundInProgress() {
    return this.isRoundInProgress;
  }
  //
  // Iniciar una nueva ronda
  public startRound() {
    this.isRoundInProgress = true;
    this.OnRoundChanged();

    return this.isRoundInProgress;
  }

  // Finalizar la ronda actual
  public endRound() {
    this.isRoundInProgress = false;
    this.OnRoundChanged();

    return this.isRoundInProgress;
  }

  private OnRoundChanged() {
    this.wssService.sendMessage("on-round-count-changed", this.round);
  }
}
