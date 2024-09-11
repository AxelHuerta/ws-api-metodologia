import { Request, Response } from "express";
import { LimitOfUsersService } from "../services/limitOfUsers.service";

export class LimitOfUsersController {
  constructor(private readonly userService = new LimitOfUsersService()) {}

  // Obtener el limite de usuarios
  public getLimitOfUsers = async (_req: Request, res: Response) => {
    res.json(this.userService.getLimitOfUsers());
  };

  // Establecer el limite de usuarios
  public setLimitOfUsers = async (req: Request, res: Response) => {
    const { limit } = req.body;
    res.json(this.userService.setLimitOfUsers(limit));
  };
}
