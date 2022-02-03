import {MigrationInterface, QueryRunner} from "typeorm";

export class AddActiveAccountToUser1643889404916 implements MigrationInterface {
  name = "AddActiveAccountToUser1643889404916";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("ALTER TABLE 'users' ADD COLUMN 'activeAccount' boolean NOT NULL");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("ALTER TABLE 'users' DROP COLUMN 'activeAccount'");
  }

}
