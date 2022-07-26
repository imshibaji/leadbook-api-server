import { Lead } from './../../leads/entities/lead.entity';
import { ApiProperty } from "@nestjs/swagger";
import { IsCurrency, IsNotEmpty } from "class-validator";

export class DealDto {
    @ApiProperty({
        type: Number,
        required: false,
        description: 'Deal ID',
        default: null
    })
    id:number;

    @ApiProperty({
        type: String,
        required: false,
        description: 'Deal UUID',
        default: null
    })
    uid?: string;

    @IsNotEmpty()
    @ApiProperty({
        type: String,
        required: true,
        description: 'Deal Name',
        example: 'SKU 1'
    })
    name: string;

    @IsNotEmpty()
    @ApiProperty({
        type: String,
        required: true,
        description: 'Deal Deails',
        example: 'Some Product / Service has purchase'
    })
    details: string;

    @IsNotEmpty()
    @ApiProperty({
        type: Number,
        required: true,
        description: 'Deal price',
        example: 233.34
    })
    price: number;

    @ApiProperty({
        type: String,
        required: false,
        description: 'Deal Discount',
        example: 12.34
    })
    discount: number;

    @IsNotEmpty()
    @ApiProperty({
        type: String,
        required: true,
        description: 'Deal Status',
        default: 'pending'
    })
    status: string;

    @IsNotEmpty()
    @ApiProperty({
        type: Date,
        required: true,
        description: 'Deal Created Date and Time',
        default: ()=> 'CURRENT_TIMESTAMP'
    })
    createdAt: Date;

    @ApiProperty({
        type: String,
        required: false,
        description: 'Deal Linded Lead UID',
        default: null
    })
    leadUid?: string;

    @ApiProperty({
        type: Object,
        required: false,
        description: 'Deal Linded Lead UID',
        default: {}
    })
    lead?: Lead;
}
