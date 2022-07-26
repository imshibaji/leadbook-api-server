import { LeadsService } from './../leads/leads.service';
import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DealsService } from './deals.service';
import { DealDto } from './dto/deal.dto';

@Controller('deals')
@ApiTags('Deals')
export class DealsController {
  constructor(
    private readonly dealsService: DealsService,
    private readonly leadService: LeadsService
  ) {}

  @Get()
  findAll() {
    return this.dealsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dealsService.findOne(+id);
  }

  @Post()
  create(@Body() dealDto: DealDto) {
    return this.dealsService.create(dealDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dealDto: DealDto) {
    return this.dealsService.update(+id, dealDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dealsService.remove(+id);
  }

  @Put('lead-add/:did/:lid')
  async addLead(@Param('did') did:number, @Param('lid') lid: number){
    const deal = await this.dealsService.findOne(+did);
    const lead = await this.leadService.findOne(+lid);
    const check = await this.dealsService.addRelativeLead(deal, lead);

    if(check == null){
      return {message: 'Lead connected with deal'};
    }else{
      return check;
    }
  }

  @Delete('lead-remove/:did/:lid')
  async removeLead(@Param('did') did:number, @Param('lid') lid: number){
    const deal = await this.dealsService.findOne(+did);
    const lead = await this.leadService.findOne(+lid);
    const check = await this.dealsService.removeRelativeLead(deal, lead);

    if(check == null){
      return {message: 'Lead disconnected with deal'};
    }else{
      return check;
    }
  }
}
