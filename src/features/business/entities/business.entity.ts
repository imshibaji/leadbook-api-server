import { Lead } from './../../leads/entities/lead.entity';
import { User } from "src/features/users/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Payment } from 'src/features/payments/entities/payment.entity';

@Entity()
export class Business {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({default: null})
    uid?:string;

    @Column()
    name: string;

    @Column({default:null})
    address?: string;

    @Column({default:null})
    city?: string;

    @Column({default:null})
    state?: string;

    @Column()
    country: string;

    @Column()
    pincode: number;

    @Column()
    mobile:string;

    @Column({default:null})
    altMobile?:string;

    @Column()
    email:string;

    @Column({default:null})
    website?: string;

    @Column({default:false})
    isActive:boolean;

    @ManyToMany(()=>User, user => user.businesses)
    users?:User[];

    @ManyToMany(()=>Lead, lead => lead.businesses)
    leads?:Lead[];

    @OneToMany(()=>Payment, payment => payment.business)
    payments: Payment[]

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAt:Date;

    @DeleteDateColumn()
    deletedAt:Date;
}
