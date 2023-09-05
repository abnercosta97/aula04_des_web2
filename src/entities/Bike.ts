import { Column } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm";
import { Entity } from "typeorm";

export type Gender = "masculico" | "feminino" | "unissex";
export type Material = "aluminio" | "carbono" | "ferro";

@Entity({name:"bikes"})
export class Bikes{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, length:30})
    color: string;

    @Column({nullable: false, length: 10})
    size: string;

    @Column({nullable:false, type:"enum", enum:["aluminio", "carbono", "ferro"]})
    material: Material;
    
    @Column({nullable:false, type:"enum", enum:["masculino", "feminino", "unissex"]})
    gender: Gender;

    @Column({nullable:false, length:10})
    speedkit: string;

    @Column({nullable:false})
    aro: number;

    @Column({nullable:false})
    suspensao: boolean;

    @Column({nullable:false})
    hourlyvalue: number;

    @Column({nullable:false})
    dailyvalues: number;

    @Column({nullable:false, length:200})
    description: string;
}