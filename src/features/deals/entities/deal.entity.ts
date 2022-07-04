import { Lead } from './../../leads/entities/lead.entity';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Deal {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    uid?: string;

    @Column()
    name: string;

    @Column()
    details: string;

    @Column({default:0})
    price: number;

    @Column({default:0})
    discount: number;

    @Column()
    status: string;

    @CreateDateColumn()
    createdAt: Date;

    @Column()
    leadUid?: string;

    @ManyToOne(()=>Lead, lead => lead.deals)
    lead?: Lead;
}
