// src/notifications.service.ts
import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import * as path from 'path';

@Injectable()
export class NotificationsService {
  constructor() {
    // Inicializar Firebase con las credenciales del archivo JSON descargado
    const serviceAccount = path.resolve(__dirname, 'C:/Users/yojan/OneDrive/Documents/GitHub/Api_NestJS/backend/api-nestjs-clave-firebase.json');
    
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }

  async sendNotification(token: string, message: string) {
    const payload = {
      notification: {
        title: 'Notificación de Jugador',
        body: message,
      },
    };

    try {
      await admin.messaging().sendToDevice(token, payload);
      console.log('Notificación enviada correctamente');
    } catch (error) {
      console.error('Error al enviar la notificación:', error);
    }
  }
}
