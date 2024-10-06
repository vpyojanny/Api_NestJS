import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class TasksService {
  constructor(@InjectQueue('playersQueue') private playersQueue: Queue) {}

  async addPlayerRegistrationTask(playerData: any) {
    await this.playersQueue.add('registerPlayer', playerData, {
      delay: 5000, // Ejemplo de un retraso de 5 segundos, si deseas.
    });
  }
}
