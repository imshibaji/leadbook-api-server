import { Business } from './../../business/entities/business.entity';
import { Lead } from './../../leads/entities/lead.entity';
import { Deal } from './../../deals/entities/deal.entity';
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Payment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({default: null})
    uid?:string;

    @Column()
    details: string;

    @Column({default:0})
    amount: number;

    @Column()
    type: string;

    @CreateDateColumn()
    createdAt:Date;

    @Column({default: null})
    leadUid?: string;

    @Column({default: null})
    dealUid?: string;

    @OneToOne(()=> Lead)
    lead?:Lead;

    @OneToOne(()=> Deal)
    deal?:Deal;

    @ManyToOne(()=>Business, business => business.payments)
    business?: Business;
}
