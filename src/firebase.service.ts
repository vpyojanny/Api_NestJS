import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseService {
  constructor() {
    admin.initializeApp({
      credential: admin.credential.applicationDefault(),
      databaseURL: 'https://api-nestjs-b0b61.firebaseio.com',
    });
  }

  async sendPushNotification(token: string, message: string) {
    const payload = {
      notification: {
        title: 'Notificación',
        body: message,
      },
    };
    return admin.messaging().sendToDevice(token, payload);
  }
}
