import { Deal } from './../../deals/entities/deal.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({default:null})
    uid?: string;

    @Column()
    name: string;

    @Column()
    details: string;

    @Column()
    price: number;

    @Column({default:0})
    discount: number;

    @Column({default:1})
    quantity: number;

    @Column({default:"unit"})
    unit: string;

    @Column({default:0})
    total: number;

    @Column({default:null})
    dealUid?: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @ManyToOne(()=>Deal, deal => deal.orders)
    deal: Deal;
}
