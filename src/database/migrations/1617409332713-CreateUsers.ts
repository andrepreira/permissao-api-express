import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1617409332713 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`)

        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'gen_random_uuid()'
                    },
                    {
                        name: 'name',
                        type: 'varchar'
                    },
                    {
                        name: 'username',
                        type: 'varchar'
                    },
                    {
                        name: 'password',
                        type: 'varchar'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
