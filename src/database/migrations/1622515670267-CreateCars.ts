import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCar1622515670267 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		return await queryRunner.createTable(new Table({
			name: 'carros',
			columns: [
				{
					name: 'id',
					type: 'uuid',
					isPrimary: true
				},
				{
					name: 'marca',
					type: 'varchar',
				},
				{
					name: 'modelo',
					type: 'varchar',
				},
				{
					name: 'ano',
					type: 'int',
				},
				{
					name: 'combustivel',
					type: 'varchar',
				},
				{
					name: 'cor',
					type: 'varchar',
				},
				{
					name: 'preco',
					type: 'float',
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
		return await queryRunner.dropTable('carros')
	}

}
