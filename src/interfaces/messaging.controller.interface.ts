import { Request, Response } from "express";

export interface IMessagingController {
  sendMessage(req: Request, res: Response): void;
}
