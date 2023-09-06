import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1693956113146 implements MigrationInterface {
    name = 'Default1693956113146'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "brands" ("id" SERIAL NOT NULL, "name" character varying(20) NOT NULL, CONSTRAINT "UQ_96db6bbbaa6f23cad26871339b6" UNIQUE ("name"), CONSTRAINT "PK_b0c437120b624da1034a81fc561" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."bikes_material_enum" AS ENUM('aluminio', 'carbono', 'ferro')`);
        await queryRunner.query(`CREATE TYPE "public"."bikes_gender_enum" AS ENUM('masculino', 'feminino', 'unissex')`);
        await queryRunner.query(`CREATE TABLE "bikes" ("id" SERIAL NOT NULL, "color" character varying(30) NOT NULL, "size" character varying(10) NOT NULL, "material" "public"."bikes_material_enum" NOT NULL, "gender" "public"."bikes_gender_enum" NOT NULL, "speedkit" character varying(10) NOT NULL, "aro" integer NOT NULL, "suspensao" boolean NOT NULL, "hourlyvalue" integer NOT NULL, "dailyvalues" integer NOT NULL, "description" character varying(200) NOT NULL, "idbrand" integer, CONSTRAINT "PK_5237c1fcb162998a0d31e640814" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "alias" character varying(15) NOT NULL, "mail" character varying(100) NOT NULL, "phone" character varying(20) NOT NULL, CONSTRAINT "UQ_f002c336d3299ee4eba00196902" UNIQUE ("alias"), CONSTRAINT "pk-user" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "bikes" ADD CONSTRAINT "FK_e2cc5400dfe31ee53796b6254d5" FOREIGN KEY ("idbrand") REFERENCES "brands"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bikes" DROP CONSTRAINT "FK_e2cc5400dfe31ee53796b6254d5"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "bikes"`);
        await queryRunner.query(`DROP TYPE "public"."bikes_gender_enum"`);
        await queryRunner.query(`DROP TYPE "public"."bikes_material_enum"`);
        await queryRunner.query(`DROP TABLE "brands"`);
    }

}
