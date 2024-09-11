import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { LimitOfUsersService } from "../services/limitOfUsers.service";

export class UserController {
  constructor(
    private readonly userService = new UserService(),
    private readonly limitOfUsersService = new LimitOfUsersService()
  ) {}

  // Obtener todos los usuarios
  public getUsers = async (_req: Request, res: Response) => {
    res.json(this.userService.getUsers());
  };

  // Crear un usuario
  public createUser = async (req: Request, res: Response) => {
    const limit = this.limitOfUsersService.getLimitOfUsers();
    const numberOfUsers = this.userService.getUsers().length;

    console.log("Limit of users: ", limit);

    // Verificar si se ha alcanzado el límite de usuarios
    if (numberOfUsers >= limit) {
      console.log("Limit of users reached");
      res.json({ error: "Limit of users reached" });
      return;
    }
    // Crear un nuevo usuario
    const { name } = req.body;
    res.json(this.userService.createUser(name));
  };

  // Actulizar los datos de un usuario
  public updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { round, answer } = req.body;

    res.json(this.userService.updateUser(Number(id), round, answer));
  };

  // Obtener el límite de usuarios
  public getLimitOfUsers = async (_req: Request, res: Response) => {
    res.json(this.limitOfUsersService.getLimitOfUsers());
  };

  // Establecer el límite de usuarios
  public setLimitOfUsers = async (req: Request, res: Response) => {
    const { limit } = req.body;
    res.json(this.limitOfUsersService.setLimitOfUsers(limit));
  };
}
