import "reflect-metadata";
import Express from "express";
import { Container } from "typedi";
import { MessagingController } from "./controllers/messaging.controller";
import { IMessagingService } from "./interfaces/messaging.interface";
import { MessagingService } from "./services/messaging.service";
import { IEmailService } from "./interfaces/email.interface";
import { EmailService } from "./services/email.service";

const app = Express();
const PORT = 3006;

// Register services and controllers with the container
Container.set<IEmailService>("IEmailService", new EmailService());
Container.set<IMessagingService>(
  "IMessagingService",
  new MessagingService(Container.get<IEmailService>("IEmailService"))
);
Container.set<MessagingController>(
  MessagingController,
  new MessagingController(Container.get<IMessagingService>("IMessagingService"))
);

app.use(Express.json());
app.post(
  "/message",
  Container.get(MessagingController).sendMessage.bind(
    Container.get(MessagingController)
  )
);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
