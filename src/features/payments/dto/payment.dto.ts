import { ApiProperty } from '@nestjs/swagger';
import { Business } from './../../business/entities/business.entity';
import { Deal } from './../../deals/entities/deal.entity';
import { Lead } from './../../leads/entities/lead.entity';


export class PaymentDto {
    @ApiProperty({
        type: Number,
        required: false,
        description: 'Payment Id',
        default: null
    })
    id?: number;

    @ApiProperty({
        type: String,
        required: false,
        description: 'Payment UUID',
        default: null
    })
    uid?:string;

    @ApiProperty({
        type: String,
        required: true,
        description: 'Payment Details',
        example: 'Sample Payment'
    })
    details: string;

    @ApiProperty({
        type: Number,
        required: true,
        description: 'Payment Amount',
        example: 100
    })
    amount: number;

    @ApiProperty({
        type: Number,
        required: false,
        description: 'Payment Discount Amount',
        example: 10
    })
    discount: number;

    @ApiProperty({
        type: String,
        required: true,
        description: 'Payment Type(Eg: Income / Expanse)',
        example: 'income'
    })
    type: string;

    @ApiProperty({
        type: Date,
        required: true,
        description: 'Payment Transection Date And Time',
        default: ()=> 'CURRENT_TIMESTAMP'
    })
    createdAt:Date;

    @ApiProperty({
        type: String,
        required: false,
        description: 'Lead UUID',
        default: null,
    })
    leadUid?: string;
    
    @ApiProperty({
        type: Number,
        required: false,
        description: 'Deal UUID',
        default: null
    })
    dealUid?: string;

    @ApiProperty({
        type: Object,
        required: false,
        description: 'Lead Object',
        default: {}
    })
    lead:Lead;

    @ApiProperty({
        type: Object,
        required: false,
        description: 'Deal Object',
        default: {}
    })
    deal:Deal;

    @ApiProperty({
        type: Object,
        required: true,
        description: 'Business Object'
    })
    business: Business;
}
