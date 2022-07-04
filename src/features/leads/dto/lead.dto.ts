import { Deal } from './../../deals/entities/deal.entity';
import { Followup } from './../../followups/entities/followup.entity';
import { Business } from './../../business/entities/business.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LeadDto {
    @ApiProperty({
        type: Number,
        required: false,
        description: 'Lead ID',
        default: null
    })
    id?:number;

    @ApiProperty({
        type: String,
        required: false,
        description: 'Lead UUID',
        default: null
    })
    uid?:string;

    @ApiProperty({
        type: String,
        required: false,
        description: 'Lead Purpose',
        default: null
    })
    purpose?:string;

    @IsNotEmpty()
    @ApiProperty({
        type: String,
        required: true,
        description: 'Lead Name',
    })
    name: String;

    @ApiProperty({
        type: String,
        required: false,
        description: 'Lead Email',
    })
    email?:string;

    @IsNotEmpty()
    @ApiProperty({
        type: String,
        required: true,
        description: 'Lead Mobile',
    })
    mobile: string;

    @ApiProperty({
        type: String,
        required: false,
        description: 'Lead Alternate Mobile',
    })
    altMobile?:string;

    @IsNotEmpty()
    @ApiProperty({
        type: String,
        required: true,
        description: 'Lead Source',
        default: 'Others'
    })
    source: string;

    @IsNotEmpty()
    @ApiProperty({
        type: String,
        required: false,
        description: 'Lead Status',
        default: 'new'
    })
    status: string;

    businesses?: Business[]

    followups?: Followup[]

    deals?: Deal[]
}
