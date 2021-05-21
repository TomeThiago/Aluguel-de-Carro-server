import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

@Entity('carros')
class Car {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  marca: string;

  @Column()
  modelo: string;

  @Column()
  ano: number;

  @Column()
  cor: string;

  @Column()
  combustivel: string;

  @Column()
  preco: number;

  @CreateDateColumn()
  dataCadastro: Date;

  @UpdateDateColumn()
  dataAlteracao: Date;

  constructor(props: Omit<Car, ''>) {
    Object.assign(this, props);
  }
}

export { Car };