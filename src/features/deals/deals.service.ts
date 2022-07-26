import { Lead } from './../leads/entities/lead.entity';
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
    try {
      const deal = this.dealRepository.create(dealDto);
      return this.dealRepository.save(deal);
    } catch (error) {
      console.log(error);
    }
  }

  findAll() {
    try {
      return this.dealRepository.find({
        relations: ['lead']
      });
    } catch (error) {
      console.log(error);
    }
  }

  findOne(id: number) {
    try {
      return this.dealRepository.findOne({where: {id: id}, relations:['lead']});
    } catch (error) {
      console.log(error);
    }
  }

  update(id: number, dealDto: DealDto) {
    try {
      return this.dealRepository.update(id, dealDto);
    } catch (error) {
      console.log(error);
    }
  }

  remove(id: number) {
    try {
      return this.dealRepository.delete(id);
    } catch (error) {
      console.log(error);
    }
  }

  // Lead
  async addRelativeLead(deal: Deal, lead: Lead){
    try {
      await this.dealRepository.createQueryBuilder().relation(Deal, 'lead').of(deal).set(lead);
    } catch (error) {
      return error;
    }
  }

  async removeRelativeLead(deal: Deal, lead: Lead){
    try {
      await this.dealRepository.createQueryBuilder().relation(Deal, 'lead').of(deal).set(null);
    } catch (error) {
      return error;
    }
  }
}
