import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1621537990842 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.createTable(new Table({
      name: 'usuarios',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
        },
        {
          name: 'nome',
          type: 'varchar',
        },
        {
          name: 'email',
          type: 'varchar',
          isUnique: true,
        },
        {
          name: 'senha',
          type: 'varchar',
        },
        {
          name: 'dataCadastro',
          type: 'timestamp',
          default: 'now()'
        },
        {
          name: 'dataAlteracao',
          type: 'timestamp',
          default: 'now()'
        }
      ],
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.dropTable('usuarios');
  }
}
