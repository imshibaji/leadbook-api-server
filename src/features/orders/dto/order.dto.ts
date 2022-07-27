import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class OrderDto {
    @ApiProperty({
        type: Number,
        required: false,
        description: 'Order ID',
        default: null
    })
    id: number;

    @ApiProperty({
        type: String,
        required: false,
        description: 'Order UID',
        default: null
    })
    uid: String;

    @IsNotEmpty()
    @ApiProperty({
        type: String,
        required: true,
        description: 'Order Name',
        example: "Product / Service 1"
    })
    name: String;

    @IsNotEmpty()
    @ApiProperty({
        type: String,
        required: true,
        description: 'Order Details',
        example: "Product Details"
    })
    details: String;
    
    @IsNotEmpty()
    @ApiProperty({
        type: Number,
        required: true,
        description: 'Order Price',
        default: 0
    })
    price: number;

    @ApiProperty({
        type: Number,
        required: false,
        description: 'Order Discount',
        default: 0
    })
    discount: number;

    @ApiProperty({
        type: Number,
        required: false,
        description: 'Order Quantity',
        default: 1
    })
    quantity: number;

    @ApiProperty({
        type: String,
        required: true,
        description: 'Order Unit',
        example: '1 pc'
    })
    unit: String;

    @ApiProperty({
        type: Number,
        required: false,
        description: 'Order Total',
        default: 0
    })
    total: number;

    @ApiProperty({
        type: String,
        required: false,
        description: 'Deal UID',
        default: null
    })
    deadUid: String;
}
