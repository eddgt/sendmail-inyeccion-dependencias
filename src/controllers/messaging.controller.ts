import { Request, Response } from "express";
import { IMessagingController } from "../interfaces/messaging.controller.interface";
import { IMessagingService } from "../interfaces/messaging.interface";

export class MessagingController implements IMessagingController {
  private messagingService: IMessagingService;

  constructor(messagingService: IMessagingService) {
    this.messagingService = messagingService;
  }

  async sendMessage(req: Request, res: Response): Promise<void> {
    const { to, body } = req.body;

    if (!to || !body) {
      res.status(400).send({
        error: "Missing parameters: 'to' and 'body' are required.",
      });
      return;
    }

    try {
      await this.messagingService.sendMessage(to, body);
      res.status(200).send({
        message: "Message sent successfully",
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        error: `An error occurred while sending the message: ${error}`,
      });
    }
  }
}
