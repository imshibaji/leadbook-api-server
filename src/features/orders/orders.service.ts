import { Repository } from 'typeorm';
import { Deal } from './../deals/entities/deal.entity';
import { Order } from './entities/order.entity';
import { Inject, Injectable } from '@nestjs/common';
import { OrderDto } from './dto/order.dto';

@Injectable()
export class OrdersService {

  constructor(
    @Inject('ORDER_REPOSITORY')
    private orderRepositoty: Repository<Order>
  ){}

  create(orderDto: OrderDto) {
    return 'This action adds a new order';
  }

  findAll() {
    return `This action returns all orders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, orderDto: OrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }

  // Deal
  async addRelativeDeal(order: Order, deal: Deal){
    try {
      await this.orderRepositoty.createQueryBuilder().relation(Order, 'deal').of(order).set(deal);
    } catch (error) {
      return error;
    }
  }

  async removeRelativeDeal(order: Order, deal: Deal){
    try {
      await this.orderRepositoty.createQueryBuilder().relation(Order, 'deal').of(order).set(null);
    } catch (error) {
      return error;
    }
  }
}
