import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DealsService } from './deals.service';
import { DealDto } from './dto/deal.dto';

@Controller('deals')
@ApiTags('Deals')
export class DealsController {
  constructor(private readonly dealsService: DealsService) {}

  @Post()
  create(@Body() dealDto: DealDto) {
    return this.dealsService.create(dealDto);
  }

  @Get()
  findAll() {
    return this.dealsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dealsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dealDto: DealDto) {
    return this.dealsService.update(+id, dealDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dealsService.remove(+id);
  }
}
