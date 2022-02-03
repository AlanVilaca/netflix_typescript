import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddActiveAccountToUser1643889404916 implements MigrationInterface {
  name = "AddActiveAccountToUser1643889404916";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn("users", new TableColumn({
      name: "activeAccount",
      type: "boolean",
      isNullable: false,
      default: true
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("users", "activeAccount");
  }

}
