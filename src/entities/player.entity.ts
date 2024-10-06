import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // Esto indica que esta clase será una entidad en la base de datos
export class Player {
  @PrimaryGeneratedColumn()
  id: number; // Campo 'id' generado automáticamente como clave primaria

  @Column()
  name: string; // Campo para el nombre del jugador

  @Column()
  position: string; // Campo para la posición del jugador

  @Column({ nullable: true })
  club: string; // Puedes agregar otros campos como el club, goles, etc.
}
