import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export class UserController {
  constructor(private readonly userService = new UserService()) {}

  // Obtener todos los usuarios
  public getUsers = async (_req: Request, res: Response) => {
    res.json(this.userService.getUsers());
  };

  // Crear un usuario
  public createUser = async (req: Request, res: Response) => {
    const users = this.userService.getUsers();

    // Limitar a 3 jugadores
    if (users.length >= 3) {
      res.json({ error: "Maximum 3 players" });
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
    res.json(this.userService.getLimitOfUsers());
  };

  // Establecer el límite de usuarios
  public setLimitOfUsers = async (req: Request, res: Response) => {
    const { limit } = req.body;

    res.json(this.userService.setLimitOfUsers(limit));
  };
}
