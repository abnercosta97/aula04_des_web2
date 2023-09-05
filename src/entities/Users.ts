import { Column } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm";
import { Entity } from "typeorm";

@Entity({name:"users"})
export class User{
    @PrimaryGeneratedColumn({primaryKeyConstraintName:"pk-user"})
    id: number;

    @Column({nullable: false, length:15, unique: true})
    alias: string;

    @Column({nullable: false, length: 100})
    mail: string;

    @Column({nullable:false, length:20})
    phone: string;

}