import { Business } from "src/features/business/entities/business.entity";
import {Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Role } from './role.enum';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({default: null})
    uid?:string;

    @Column()
    name: string;

    @Column({unique: true})
    email:string;

    @Column({unique: true, default:null})
    mobile?:string;

    @Column({default:null})
    password: string;

    @Column({
        type: "enum", 
        enum: Role, 
        default: Role.User,
    })
    role:Role;

    @Column()
    isActive:boolean;

    @ManyToMany(()=> Business, business => business.users)
    @JoinTable()
    businesses?: Business[];

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAt:Date;

    @DeleteDateColumn()
    deletedAt:Date;
}
