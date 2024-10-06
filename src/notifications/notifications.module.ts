import { Module } from '@nestjs/common';
import { NotificationsService } from '../notifications.service';

@Module({
  providers: [NotificationsService],
  exports: [NotificationsService], // Exporta el servicio para que otros módulos lo usen
})
export class NotificationsModule {}
