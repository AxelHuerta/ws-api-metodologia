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
    const limit = this.userService.getLimitOfUsers();
    const numberOfUsers = this.userService.getUsers().length;

    // Verificar si se ha alcanzado el límite de usuarios
    if (numberOfUsers >= limit) {
      res.json({ error: "Limit of users reached" });
      return;
    }
    // Crear un nuevo usuario
    const { name } = req.body;
    console.log(name);
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

  // Guardar los usuarios en la base de datos
  public saveUsers = async (_req: Request, res: Response) => {
    res.json(this.userService.saveRoundUsers());
  };

  // Limpiar la lista de usuarios
  public cleanUsersArray = async (_req: Request, res: Response) => {
    res.json(this.userService.cleanUsersArray());
  };
}
