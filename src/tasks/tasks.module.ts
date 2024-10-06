import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { TasksService } from './tasks.service';
import { TasksProcessor } from './task.processor';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'playersQueue', // Nombre de la cola para los jugadores
    }),
  ],
  providers: [TasksService, TasksProcessor],
  exports: [TasksService],
})
export class TasksModule {}
