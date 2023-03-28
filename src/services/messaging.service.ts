import { IMessagingService } from "../interfaces/messaging.interface";
import { IEmailService } from "../interfaces/email.interface";

export class MessagingService implements IMessagingService {
  constructor(private emailService: IEmailService) {}

  async sendMessage(to: string, body: string): Promise<void> {
    console.log(`Sending message to ${to} with body ${body}`);
    this.emailService.sendEmail(to, body);
  }
}
