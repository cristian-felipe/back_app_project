import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("usuario")
export class User{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({ nullable: true })
    nombre:string;

    @Column()
    apellido:string;

    @Column()
    correo:string;

    @Column()
    edad:number;

    @Column({ nullable: true })
    idRol:number;

    @Column({ nullable: true })
    fechaNacimiento:Date;

}