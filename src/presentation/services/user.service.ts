import { UserModel } from "../../data/mongo";
import { User } from "../../interface/user";
import { WssService } from "./wss.service";

export class UserService {
  constructor(private readonly wssService = WssService.instance) {}

  public users: User[] = [];
  public MAX_USERS = 8;

  // Obtener todos los usuarios
  public async getAllUsers() {
    return await UserModel.find();
  }

  public async saveRoundUsers() {
    try {
      const savedUsers = await UserModel.insertMany(this.users);
      return savedUsers;
    } catch (error) {
      throw new Error("Error saving users");
    }
  }

  // Limpiar la lista de usuarios
  public cleanUsersArray() {
    this.users = [];
  }

  // Obtener todos los usuarios
  public getUsers() {
    return this.users;
  }

  // Crear un usuario
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

  // Actualizar un usuario
  public updateUser(id: number, round: number, answer: string) {
    const user = this.users.find((u) => u.id === id);

    console.log(id, round, answer);
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

  public getLimitOfUsers() {
    return this.MAX_USERS;
  }

  // Establecer el límite de usuarios
  public setLimitOfUsers(limit: number) {
    this.MAX_USERS = limit;

    this.OnUserChanged();

    console.log(`Limit of users changed to ${this.MAX_USERS}`);
    return this.MAX_USERS;
  }

  private OnUserChanged() {
    this.wssService.sendMessage("on-user-count-changed", this.users);
  }
}
