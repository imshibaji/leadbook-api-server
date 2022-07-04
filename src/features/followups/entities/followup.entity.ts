import { Lead } from './../../leads/entities/lead.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Followup {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    uid?: string;

    @Column()
    discuss: string;

    @Column()
    status: string;

    @Column()
    schedule: Date;

    @Column()
    leadUid?: string;

    @Column()
    isDone: boolean;

    @ManyToOne(()=> Lead, lead => lead.followups)
    lead: Lead;
}
