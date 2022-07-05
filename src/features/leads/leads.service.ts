import { Deal } from './../deals/entities/deal.entity';
import { Followup } from './../followups/entities/followup.entity';
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
      return error;
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
      return error;
    }
  }

  async update(id: number, leadDto: LeadDto) {
    try {
      return await this.leadRepository.update(id, leadDto);
    } catch (error) {
      return error;
    }
  }

  async remove(id: number) {
    try {
      return await this.leadRepository.delete(id);
    } catch (error) {
      return error;
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

  // Followup 
  async addRelativeFollowup(lead: Lead, followup: Followup){
    try {
      await this.leadRepository.createQueryBuilder().relation(Lead, 'followups').of(lead).add(followup);
    } catch (error) {
      return error;
    }
  }
  async switchRelativeFollowup(lead: Lead, newFollowup: Followup, oldFollowup: Followup){
    try {
      await this.leadRepository.createQueryBuilder().relation(Lead, 'followups').of(lead).addAndRemove(newFollowup, oldFollowup);
    } catch (error) {
      return error;
    }
  }
  async removeRelativeFollowup(lead: Lead, followup: Followup){
    try {
      await this.leadRepository.createQueryBuilder().relation(Lead, 'followups').of(lead).remove(followup);
    } catch (error) {
      return error;
    }
  }

  // Deal
  async addRelativeDeal(lead: Lead, deal: Deal){
    try {
      await this.leadRepository.createQueryBuilder().relation(Lead, 'deals').of(lead).add(deal);
    } catch (error) {
      return error;
    }
  }

  async switchRelativeDeal(lead: Lead, newDeal: Deal, oldDeal: Deal){
    try {
      await this.leadRepository.createQueryBuilder().relation(Lead, 'deals').of(lead).addAndRemove(newDeal, oldDeal);
    } catch (error) {
      return error;
    }
  }

  async removeRelativeDeal(lead: Lead, deal: Deal){
    try {
      await this.leadRepository.createQueryBuilder().relation(Lead, 'deals').of(lead).remove(deal);
    } catch (error) {
      return error;
    }
  }
}
