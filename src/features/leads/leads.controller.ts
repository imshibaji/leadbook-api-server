import { BusinessService } from './../business/business.service';
import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { LeadsService } from './leads.service';
import { LeadDto } from './dto/lead.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('leads')
@ApiTags('Leads')
export class LeadsController {
  constructor(
      private readonly leadsService: LeadsService,
      private readonly businessService: BusinessService,
  ) {}

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

  @Put('business-add/:lid/:bid')
  async addBusiness(@Param('lid') lid: number, @Param('bid') bid: number){
    const lead = await this.leadsService.findOne(lid);
    const business = await this.businessService.findOne(bid);
    const check = await this.leadsService.addRelativeBusiness(lead, business);
    if(check == null){
      return {message: 'Lead connected with Business'};
    }else{
      return check;
    }
  }

  @Delete('business-remove/:lid/:bid')
  async removeBusiness(@Param('lid') lid: number, @Param('bid') bid: number){
    const lead = await this.leadsService.findOne(lid);
    const business = await this.businessService.findOne(bid);
    const check = await this.leadsService.removeRelativeBusiness(lead, business);
    if(check == null){
      return {message: 'Lead disconnected with Business'};
    }else{
      return check;
    }
  }

  @Put('followup-add/:lid/:bid')
  async addFollowup(@Param('lid') lid: number, @Param('bid') bid: number){
    const lead = await this.leadsService.findOne(lid);
    const business = await this.businessService.findOne(bid);
    const check = await this.leadsService.addRelativeBusiness(lead, business);
    if(check == null){
      return {message: 'Lead connected with Business'};
    }else{
      return check;
    }
  }

  @Delete('followup-remove/:lid/:bid')
  async removeFollowup(@Param('lid') lid: number, @Param('bid') bid: number){
    const lead = await this.leadsService.findOne(lid);
    const business = await this.businessService.findOne(bid);
    const check = await this.leadsService.removeRelativeBusiness(lead, business);
    if(check == null){
      return {message: 'Lead disconnected with Business'};
    }else{
      return check;
    }
  }

  @Put('deal-add/:lid/:bid')
  async addDeal(@Param('lid') lid: number, @Param('bid') bid: number){
    const lead = await this.leadsService.findOne(lid);
    const business = await this.businessService.findOne(bid);
    const check = await this.leadsService.addRelativeBusiness(lead, business);
    if(check == null){
      return {message: 'Lead connected with Business'};
    }else{
      return check;
    }
  }

  @Delete('deal-remove/:lid/:bid')
  async removeDeal(@Param('lid') lid: number, @Param('bid') bid: number){
    const lead = await this.leadsService.findOne(lid);
    const business = await this.businessService.findOne(bid);
    const check = await this.leadsService.removeRelativeBusiness(lead, business);
    if(check == null){
      return {message: 'Lead disconnected with Business'};
    }else{
      return check;
    }
  }
}
