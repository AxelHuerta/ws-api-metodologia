import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export class UserController {
  constructor(private readonly userService = new UserService()) {}

  public getUsers = async (req: Request, res: Response) => {
    res.json(this.userService.getUsers());
  };

  public createUser = async (req: Request, res: Response) => {
    const { name } = req.body;
    console.log(name);
    res.json(this.userService.createUser(name));
  };

  public updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { round, answer } = req.body;

    console.log(id, round, answer);

    res.json(this.userService.updateUser(Number(id), round, answer));
  };
}
