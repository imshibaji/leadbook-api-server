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
    try {
      const order = this.orderRepositoty.create(orderDto);
      return this.orderRepositoty.save(order);
    } catch (error) {
      console.log(error);
    }
  }

  findAll() {
    try {
      return this.orderRepositoty.find({
        relations: ['deal']
      });
    } catch (error) {
      console.log(error);
    }
  }

  findOne(id: number) {
    try {
      return this.orderRepositoty.findOne({where: {id}, relations:['deal']});
    } catch (error) {
      console.log(error);
    }
  }

  update(id: number, orderDto: OrderDto) {
    try {
      return this.orderRepositoty.update(id, orderDto);
    } catch (error) {
      console.log(error);
    }
  }

  remove(id: number) {
    try {
      return this.orderRepositoty.delete(id);
    } catch (error) {
      console.log(error);
    }
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
