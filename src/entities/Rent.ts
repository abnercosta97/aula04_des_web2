import { Column, JoinColumn, ManyToOne } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm";
import { Entity } from "typeorm";
import { Bikes } from "./Bike";
import { User } from "./Users";

@Entity({name:"rents"})
export class Rent{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    date: Date;

    @Column({nullable: false})
    ownerevaluation: number;

    @Column({nullable: true})
    clientevaluation: number;

    @ManyToOne(() => Bikes, (bike) => bike.rents)
    @JoinColumn({name: "idbike"})
    bike: Bikes;

    @ManyToOne(() => User, (user) => user.rents)
    @JoinColumn({name: "iduser"})
    user: User;
}