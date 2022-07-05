import { Business } from './../../business/entities/business.entity';
import { Deal } from './../../deals/entities/deal.entity';
import { Followup } from './../../followups/entities/followup.entity';
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Lead {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({default: null})
    uid?:string;

    @Column({default: null})
    purpose?:string;

    @Column()
    name: String;

    @Column({default: null})
    email?:string;

    @Column()
    mobile: string;

    @Column({default: null})
    altMobile?:string;

    @Column()
    source: string;

    @Column()
    status: string;

    @ManyToMany(()=>Business, business => business.leads)
    businesses?: Business[]

    @OneToMany(()=>Followup, followup => followup.lead)
    followups?: Followup[]

    @OneToMany(()=>Deal, deal => deal.lead)
    deals?: Deal[]
}
