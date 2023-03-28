export interface IMessagingService {
  sendMessage(to: string, body: string): Promise<void>;
}
