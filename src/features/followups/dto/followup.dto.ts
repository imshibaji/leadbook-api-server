import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsBoolean, IsNotEmpty } from 'class-validator';
import { Lead } from './../../leads/entities/lead.entity';


export class FollowupDto {
    @ApiProperty({
        type: Number,
        required: false,
        description: 'Followup ID',
        default: null
    })
    id?: number;

    @ApiProperty({
        type: String,
        required: false,
        description: 'Followup UUID',
        default: null
    })
    uid?: string;

    @IsNotEmpty()
    @ApiProperty({
        type: String,
        required: true,
        description: 'Followup Discussion'
    })
    discuss: string;

    @IsNotEmpty()
    @ApiProperty({
        type: String,
        required: true,
        description: 'Followup Status',
        default: 'pending'
    })
    status: string;

    @IsNotEmpty()
    @ApiProperty({
        type: String,
        required: true,
        description: 'Followup Schedule',
        default: Date.now()
    })
    schedule: Date;

    @ApiProperty({
        type: String,
        required: false,
        description: 'Lead UUID'
    })
    leadUid?: string;

    @IsBoolean()
    @Transform(({value})=>{
        return (value === true || (typeof value == 'string' && value.toLowerCase() === 'true'));
    })
    @ApiProperty({
        type: Boolean,
        required: true,
        description: 'Followup Done / Not Done',
        default: false
    })
    isDone: boolean;

    @ApiProperty({
        type: Object,
        required: true,
        description: 'Followup Schedule'
    })
    lead: Lead;
}
