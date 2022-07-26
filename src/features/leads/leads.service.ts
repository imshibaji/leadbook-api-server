import { Business } from './../business/entities/business.entity';
import { Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { LeadDto } from './dto/lead.dto';
import { Lead } from './entities/lead.entity';

@Injectable()
export class LeadsService {
  constructor(
    @Inject('LEAD_REPOSITORY')
    private leadRepository: Repository<Lead>
  ){}

  async create(leadDto: LeadDto) {
    try {
      const lead = this.leadRepository.create(leadDto);
      return await this.leadRepository.save(lead);
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    try {
      return await this.leadRepository.find({
        relations: [
          'businesses',
          'followups',
          'deals',
        ]
      });
    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id: number) {
    try {
      return await this.leadRepository.findOne({
        where: {id},
        relations: [
          'businesses',
          'followups',
          'deals',
        ]
      })
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: number, leadDto: LeadDto) {
    try {
      return await this.leadRepository.update(id, leadDto);
    } catch (error) {
      console.log(error);
      
    }
  }

  async remove(id: number) {
    try {
      return await this.leadRepository.delete(id);
    } catch (error) {
      console.log(error);
    }
  }

  // Business Relation
  async addRelativeBusiness(lead: Lead, business: Business){
    try {
      await this.leadRepository.createQueryBuilder().relation(Lead, 'businesses').of(lead).add(business);
    } catch (error) {
      return error;
    }
  }
  async switchRelativeBusiness(lead: Lead, newBusiness: Business, oldBusiness: Business){
    try {
      await this.leadRepository.createQueryBuilder().relation(Lead, 'businesses').of(lead).addAndRemove(newBusiness, oldBusiness);
    } catch (error) {
      return error;
    }
  }
  async removeRelativeBusiness(lead: Lead, business: Business){
    try {
      await this.leadRepository.createQueryBuilder().relation(Lead, 'businesses').of(lead).remove(business);
    } catch (error) {
      return error;
    }
  }
}
