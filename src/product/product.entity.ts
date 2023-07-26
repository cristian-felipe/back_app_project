import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
export class Product{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({ nullable: true })
    brand:string;

    @Column({ nullable: true })
    ref:string;

    @Column({ nullable: true })
    name:string;

    @Column({ nullable: true })
    description:string;

    @Column({ nullable: true })
    category:string;

    @Column()
    price:number;

    @Column()
    active:boolean

}