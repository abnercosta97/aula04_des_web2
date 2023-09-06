import { Column, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm";
import { Entity } from "typeorm";
import { Brand } from "./Brand";
import { Category } from "./Category";
import { Photo } from "./Photo";
import { User } from "./Users";
import { Rent } from "./Rent";

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

    @ManyToOne(()=> Brand)
    @JoinColumn({name: "idbrand" })
    brand: Brand;
    
    @ManyToOne(()=> Category)
    @JoinColumn({name: "idcategory" })
    category: Category;

    @OneToMany(() => Photo, (photo) => photo.bike)
    photos: Photo[];

    @ManyToOne(()=> User)
    @JoinColumn({name: "iduser" })
    user: User;
    
    @OneToMany(() => Rent, (rents) => rents.bike)
    rents: Rent[];
}