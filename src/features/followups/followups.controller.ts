import { LeadsService } from './../leads/leads.service';
import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { FollowupsService } from './followups.service';
import { FollowupDto } from './dto/followup.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('followups')
@ApiTags('Followups')
export class FollowupsController {
  constructor(
    private readonly followupsService: FollowupsService,
    private readonly leadService: LeadsService
  ) {}

  @Get()
  findAll() {
    return this.followupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.followupsService.findOne(+id);
  }

  @Post()
  create(@Body() followupDto: FollowupDto) {
    return this.followupsService.create(followupDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() followupDto: FollowupDto) {
    return this.followupsService.update(+id, followupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.followupsService.remove(+id);
  }

  @Put('lead-add/:fid/:lid')
  async addLead(@Param('fid') fid:number, @Param('lid') lid: number){
    const followup = await this.followupsService.findOne(fid);
    const lead = await this.leadService.findOne(lid);
    const check = await this.followupsService.addRelativeLead(followup, lead);

    if(check == null){
      return {message: 'Lead connected with followup'};
    }else{
      return check;
    }
  }

  @Delete('lead-remove/:fid/:lid')
  async removeLead(@Param('fid') fid:number, @Param('lid') lid: number){
    const followup = await this.followupsService.findOne(fid);
    const lead = await this.leadService.findOne(lid);
    const check = await this.followupsService.removeRelativeLead(followup, lead);

    if(check == null){
      return {message: 'Lead disconnected with followup'};
    }else{
      return check;
    }
  }
}
