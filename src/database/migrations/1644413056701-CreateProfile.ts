import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProfile1644413056701 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "profiles",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "name",
            type: "varchar"
          },
          {
            name: "avatar",
            type: "varchar",
            isNullable: true
          }
        ]
      })
    );
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("profiles");
  }

}
