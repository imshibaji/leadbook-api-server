import { DealsService } from '../deals/deals.service';
import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrderDto } from './dto/order.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
  constructor(
    private readonly ordersService: OrdersService,
    private readonly dealService: DealsService
  ) {}

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(+id);
  }

  @Post()
  create(@Body() orderDto: OrderDto) {
    return this.ordersService.create(orderDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() orderDto: OrderDto) {
    return this.ordersService.update(+id, orderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersService.remove(+id);
  }

  @Put('deal-add/:oid/:did')
  async addLead(@Param('oid') oid:number, @Param('did') did: number){
    const order = await this.ordersService.findOne(+oid);
    const deal = await this.dealService.findOne(+did);
    const check = await this.ordersService.addRelativeDeal(order, deal);

    if(check == null){
      return {message: 'Deal connected with order'};
    }else{
      return check;
    }
  }

  @Delete('deal-remove/:oid/:did')
  async removeLead(@Param('oid') oid:number, @Param('did') did: number){
    const order = await this.ordersService.findOne(+oid);
    const deal = await this.dealService.findOne(+did);
    const check = await this.ordersService.removeRelativeDeal(order, deal);

    if(check == null){
      return {message: 'Deal disconnected with order'};
    }else{
      return check;
    }
  }
}
