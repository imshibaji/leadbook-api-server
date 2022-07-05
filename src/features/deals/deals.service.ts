import { Deal } from './entities/deal.entity';
import { Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { DealDto } from './dto/deal.dto';

@Injectable()
export class DealsService {
  constructor(
    @Inject('DEAL_REPOSITORY')
    private dealRepository: Repository<Deal>
  ){}

  create(dealDto: DealDto) {
    return this.dealRepository.create(dealDto);
  }

  findAll() {
    return this.dealRepository.find();
  }

  findOne(id: number) {
    return this.dealRepository.findOne({where: {id}});
  }

  update(id: number, dealDto: DealDto) {
    return this.dealRepository.update(id, dealDto);
  }

  remove(id: number) {
    return this.dealRepository.delete(id);
  }
}
