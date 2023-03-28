export interface IEmailService {
  sendEmail(to: string, body: string): void;
}
