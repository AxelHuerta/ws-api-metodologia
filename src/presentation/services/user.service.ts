import { User } from "../../interface/user";
import { WssService } from "./wss.service";

export class UserService {
  constructor(private readonly wssService = WssService.instance) {}

  public readonly users: User[] = [];

  public getUsers() {
    return this.users;
  }

  public createUser(name: string) {
    const user: User = {
      id: this.users.length + 1,
      name: name,
      answers: [],
    };

    this.users.push(user);
    this.OnUserChanged();

    return user;
  }

  public updateUser(id: number, round: number, answer: string) {
    const user = this.users.find((u) => u.id === id);

    if (!user) {
      throw new Error("User not found");
    }

    if (user.answers.length <= round) {
      user.answers.push(answer);
    } else {
      user.answers[round] = answer;
    }

    this.OnUserChanged();

    return user;
  }

  private OnUserChanged() {
    this.wssService.sendMessage("on-user-count-changed", this.users);
  }
}
