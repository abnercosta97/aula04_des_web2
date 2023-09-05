import { Column } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm";
import { Entity } from "typeorm";

@Entity({name:"brands"})
export class Brand{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, length:20, unique: true})
    name: string;

}