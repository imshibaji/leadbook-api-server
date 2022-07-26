import { Lead } from './../../leads/entities/lead.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Order } from 'src/features/orders/entities/order.entity';

@Entity()
export class Deal {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({default: null})
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

    @Column({default: ()=> 'CURRENT_TIMESTAMP', type: 'timestamp'})
    createdAt: Date;

    @Column({default: null})
    leadUid?: string;

    @ManyToOne(()=>Lead, lead => lead.deals)
    lead: Lead;

    @OneToMany(()=> Order, order => order.deal, { eager: true })
    orders: Order[];
}
