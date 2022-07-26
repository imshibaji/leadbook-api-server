import { Business } from './../../business/entities/business.entity';
import { Lead } from './../../leads/entities/lead.entity';
import { Deal } from './../../deals/entities/deal.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @Column({default:0})
    discount: number;

    @Column()
    type: string;

    @CreateDateColumn()
    createdAt:Date;

    @Column({default: null})
    leadUid?: string;

    @Column({default: null})
    dealUid?: string;

    @OneToOne(()=> Lead, lead => lead.id)
    @JoinColumn()
    lead:Lead;

    @OneToOne(()=> Deal, deal => deal.id)
    @JoinColumn()
    deal:Deal;

    @ManyToOne(()=>Business, business => business.payments)
    business?: Business;
}
