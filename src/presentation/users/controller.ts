import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export class UserController {
  constructor(private readonly userService = new UserService()) {}

  public getUsers = async (_req: Request, res: Response) => {
    res.json(this.userService.getUsers());
  };

  public createUser = async (req: Request, res: Response) => {
    const users = this.userService.getUsers();

    // Limitar a 3 jugadores
    if (users.length >= 3) {
      console.log("Maximum 3 players");
      res.json({ error: "Maximum 3 players" });
      return;
    }

    const { name } = req.body;
    res.json(this.userService.createUser(name));
  };

  public updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { round, answer } = req.body;

    console.log(id, round, answer);

    res.json(this.userService.updateUser(Number(id), round, answer));
  };
}
