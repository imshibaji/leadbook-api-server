import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FollowupsService } from './followups.service';
import { FollowupDto } from './dto/followup.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('followups')
@ApiTags('Followups')
export class FollowupsController {
  constructor(private readonly followupsService: FollowupsService) {}

  @Post()
  create(@Body() followupDto: FollowupDto) {
    return this.followupsService.create(followupDto);
  }

  @Get()
  findAll() {
    return this.followupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.followupsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() followupDto: FollowupDto) {
    return this.followupsService.update(+id, followupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.followupsService.remove(+id);
  }
}
