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

  // Cambiar el estado de la ronda actual
  // TODO: delete this method
  public changeRoundStatus() {
    this.isRoundInProgress = !this.isRoundInProgress;

    console.log("Round status changed to: ", this.isRoundInProgress);
    this.OnRoundChanged();

    return this.isRoundInProgress;
  }

  // Iniciar una nueva ronda
  public startRound() {
    this.isRoundInProgress = true;
    console.log("Round status changed to: ", this.isRoundInProgress);
    this.OnRoundChanged();

    return this.isRoundInProgress;
  }

  public endRound() {
    this.isRoundInProgress = false;
    console.log("Round status changed to: ", this.isRoundInProgress);
    this.OnRoundChanged();

    return this.isRoundInProgress;
  }

  private OnRoundChanged() {
    this.wssService.sendMessage("on-round-count-changed", this.round);
  }
}
