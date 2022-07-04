import { Injectable } from '@nestjs/common';
import { DealDto } from './dto/deal.dto';

@Injectable()
export class DealsService {
  create(dealDto: DealDto) {
    return 'This action adds a new deal';
  }

  findAll() {
    return `This action returns all deals`;
  }

  findOne(id: number) {
    return `This action returns a #${id} deal`;
  }

  update(id: number, dealDto: DealDto) {
    return `This action updates a #${id} deal`;
  }

  remove(id: number) {
    return `This action removes a #${id} deal`;
  }
}
