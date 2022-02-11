import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateProfile1644605708523 implements MigrationInterface {

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
          },
          {
            name: "userId",
            type: "uuid",
            isNullable: false
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "now()"
          },
          {
            name: "updatedAt",
            type: "timestamp",
            default: "now()"
          }
        ]
      })
    );

    await queryRunner.createForeignKey(
      "profiles",
      new TableForeignKey({
        name: "ProfilesUser",
        referencedTableName: "users",
        referencedColumnNames: ["id"],
        columnNames: ["userId"],
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("profiles");
  }

}
