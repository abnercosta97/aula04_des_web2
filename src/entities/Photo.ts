import { Column, JoinColumn, ManyToOne } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm";
import { Entity } from "typeorm";
import { Bikes } from "./Bike";

@Entity({name:"photos"})
export class Photo{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, length:100})
    filename: string;

    @ManyToOne(() => Bikes, (bike) => bike.photos)
    @JoinColumn({name: "idbike"})
    bike: Bikes;
}