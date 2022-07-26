import { Deal } from './../../deals/entities/deal.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    details: String;

    @Column()
    amount: number;

    @Column({default:0})
    discount: number;

    @Column({default:1})
    quantity: number;

    @Column({default:"unit"})
    unit: String;

    @Column({default:0})
    total: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @ManyToOne(()=>Deal, deal => deal.orders)
    deal: Deal;
}
