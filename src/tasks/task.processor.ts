import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('playersQueue')
export class TasksProcessor {
  @Process('registerPlayer')
  async handlePlayerRegistration(job: Job) {
    const playerData = job.data;
    console.log(`Procesando registro de jugador: ${playerData.name}`);

    // Aquí puedes agregar lógica para registrar al jugador o enviar una notificación
  }
}
