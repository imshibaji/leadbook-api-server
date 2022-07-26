import { Lead } from './../../leads/entities/lead.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Followup {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({default: null})
    uid?: string;

    @Column()
    discuss: string;

    @Column()
    status: string;

    @Column({default: () => 'CURRENT_TIMESTAMP', type: 'timestamp'})
    schedule: Date;

    @Column({default: null})
    leadUid?: string;

    @Column()
    isDone: boolean;

    @ManyToOne(()=> Lead, lead => lead.followups, { cascade: true, onDelete: "CASCADE" })
    lead: Lead;
}
