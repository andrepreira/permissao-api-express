import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProducts1617605760464 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`)

        await queryRunner.createTable(
          new Table({
            name: "products",
            columns: [
              {
                name: "id",
                type: "uuid",
                isPrimary: true,
                generationStrategy: "uuid",
                default: "gen_random_uuid()",
              },
              {
                name: "name",
                type: "varchar",
              },
              {
                name: "description",
                type: "varchar",
              },
              {
                name: "created_at",
                type: "timestamp",
                default: "now()",
              },
            ],
          })
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("products");
      }

}
