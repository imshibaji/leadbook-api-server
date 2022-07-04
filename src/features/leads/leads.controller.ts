import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LeadsService } from './leads.service';
import { LeadDto } from './dto/lead.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('leads')
@ApiTags('Leads')
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  @Post()
  create(@Body() leadDto: LeadDto) {
    return this.leadsService.create(leadDto);
  }

  @Get()
  findAll() {
    return this.leadsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.leadsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() leadDto: LeadDto) {
    return this.leadsService.update(+id, leadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.leadsService.remove(+id);
  }
}
