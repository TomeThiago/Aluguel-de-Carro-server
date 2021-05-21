import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity('usuarios')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @CreateDateColumn()
  dataCadastro: Date;

  @UpdateDateColumn()
  dataAlteracao: Date;
}

export { User };