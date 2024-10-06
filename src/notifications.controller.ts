import { Body, Controller, Post } from '@nestjs/common';
import { FirebaseService } from './firebase.service';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly firebaseService: FirebaseService) {}

  @Post()
  async sendNotification(
    @Body('token') token: string,
    @Body('message') message: string,
  ) {
    return this.firebaseService.sendPushNotification(token, message);
  }
}
