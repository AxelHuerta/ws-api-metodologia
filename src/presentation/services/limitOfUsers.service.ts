import { WssService } from "./wss.service";

export class LimitOfUsersService {
  constructor(private readonly wssService = WssService.instance) {}

  private LIMIT_OF_USERS = 8;
  // Obtener el límite de usuarios
  public getLimitOfUsers() {
    return this.LIMIT_OF_USERS;
  }

  // Establecer el límite de usuarios
  public setLimitOfUsers(limit: number) {
    this.LIMIT_OF_USERS = limit;

    this.OnLimitChanged();

    console.log(`Limit of users changed to ${this.LIMIT_OF_USERS}`);
    return this.LIMIT_OF_USERS;
  }

  private OnLimitChanged() {
    this.wssService.sendMessage("on-limit-count-changed", this.LIMIT_OF_USERS);
  }
}
