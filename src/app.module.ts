import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayersModule } from './players/players.module';
import { NotificationsModule } from './notifications/notifications.module';
import { TasksModule } from './tasks/tasks.module';
import { FirebaseService } from './firebase.service';
import { NotificationsController } from './notifications.controller';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST || 'mysql-1',
      port: parseInt(process.env.DATABASE_PORT, 10) || 3307,
      username: process.env.DATABASE_USERNAME || 'endy',
      password: process.env.DATABASE_PASSWORD || 'VLsysadmin2024',
      database: process.env.DATABASE_NAME || 'futbol_amateur',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Desactiva esto en producción
    }),
    PlayersModule,
    NotificationsModule,
    TasksModule,
  ],
  controllers: [AppController,NotificationsController],
  providers: [AppService,FirebaseService],
})
export class AppModule {}
