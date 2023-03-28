import { IEmailService } from "../interfaces/email.interface";

export class EmailService implements IEmailService {
  sendEmail(to: string, body: string): void {
    console.log(`Sending email to ${to} with body ${body}`);
  }
}
