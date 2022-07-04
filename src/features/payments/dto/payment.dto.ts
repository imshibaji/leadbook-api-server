import { ApiProperty } from '@nestjs/swagger';
import { Business } from './../../business/entities/business.entity';
import { Deal } from './../../deals/entities/deal.entity';
import { Lead } from './../../leads/entities/lead.entity';


export class PaymentDto {
    @ApiProperty({
        type: Number,
        required: false,
        description: 'Payment Id'
    })
    id?: number;

    @ApiProperty({
        type: Number,
        required: false,
        description: 'Payment UUID'
    })
    uid?:string;

    @ApiProperty({
        type: Number,
        required: true,
        description: 'Payment Details'
    })
    details: string;

    @ApiProperty({
        type: Number,
        required: true,
        description: 'Payment Amount'
    })
    amount: number;

    @ApiProperty({
        type: Number,
        required: true,
        description: 'Payment Type(Eg: Income / Expanse)'
    })
    type: string;

    @ApiProperty({
        type: Number,
        required: true,
        description: 'Payment Transection Date And Time'
    })
    createdAt:Date;

    @ApiProperty({
        type: Number,
        required: false,
        description: 'Lead UUID'
    })
    leadUid?: string;
    
    @ApiProperty({
        type: Number,
        required: false,
        description: 'Deal UUID'
    })
    dealUid?: string;

    @ApiProperty({
        type: Object,
        required: false,
        description: 'Lead Object'
    })
    lead:Lead;

    @ApiProperty({
        type: Object,
        required: false,
        description: 'Deal Object'
    })
    deal:Deal;

    @ApiProperty({
        type: Object,
        required: true,
        description: 'Business Object'
    })
    business: Business;
}
