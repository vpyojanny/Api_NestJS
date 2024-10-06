import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from '../entities/player.entity';
import { PlayersService } from './players.service';
import { PlayersController } from './players.controller';
import { NotificationsModule } from '../notifications/notifications.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Player]),
    NotificationsModule, // Importa el módulo aquí
  ],
  providers: [PlayersService],
  controllers: [PlayersController],
})
export class PlayersModule {}
