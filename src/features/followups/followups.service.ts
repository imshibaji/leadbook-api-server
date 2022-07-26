import { Lead } from './../leads/entities/lead.entity';
import { Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { FollowupDto } from './dto/followup.dto';
import { Followup } from './entities/followup.entity';

@Injectable()
export class FollowupsService {
  constructor(
    @Inject('FOLLOWUP_REPOSITORY')
    private followupRepository: Repository<Followup>
  ){}

  create(followupDto: FollowupDto) {
    try {
      const followup = this.followupRepository.create(followupDto);
      return this.followupRepository.save(followup);
    } catch (error) {
      return error;
    }
  }

  findAll() {
    try {
      return this.followupRepository.find({
        relations:['lead']
      });
    } catch (error) {
      return error;
    }
    
  }

  findOne(id: number) {
    try {
      return this.followupRepository.findOne({where:{id}});
    } catch (error) {
      return error;
    }
  }

  update(id: number, followupDto: FollowupDto) {
    try {
      return this.followupRepository.update(id, followupDto);
    } catch (error) {
      return error;
    }
  }

  remove(id: number) {
    try {
      return this.followupRepository.delete(id);
    } catch (error) {
      return error;
    }
  }

  // Relations
  async addRelativeLead(followup:Followup, lead: Lead){
    try {
      await this.followupRepository.createQueryBuilder().relation(Followup, 'lead').of(followup).set(lead);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async removeRelativeLead(followup:Followup, lead: Lead){
    try {
      await this.followupRepository.createQueryBuilder().relation(Followup,'lead').of(followup).set(null);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
