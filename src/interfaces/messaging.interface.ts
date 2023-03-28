export interface IMessagingController {
  sendMessage(req: Request, res: Response): Promise<void>;
}

export interface IMessagingService {
  sendMessage(to: string, body: string): Promise<void>;
}
