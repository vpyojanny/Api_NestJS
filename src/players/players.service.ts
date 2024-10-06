import { Injectable } from '@nestjs/common';
import { NotificationsService } from '../notifications.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from '../entities/player.entity';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Player)
    private playersRepository: Repository<Player>,
    private notificationsService: NotificationsService,
  ) {}

  async createPlayer(playerData: Partial<Player> & { deviceToken?: string }): Promise<Player> {
    const { deviceToken, ...playerInfo } = playerData;
    const player = this.playersRepository.create(playerData);
    await this.playersRepository.save(player);
  
    // Enviar notificación
    const message = `Jugador ${player.name} ha sido registrado con éxito`;
    if (deviceToken) {
        await this.notificationsService.sendNotification(deviceToken, message);
      }
  
    return player;
  }
  

  // Otros métodos como findAll, findOne, update, delete, etc.
}