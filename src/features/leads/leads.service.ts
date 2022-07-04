import { Injectable } from '@nestjs/common';
import { LeadDto } from './dto/lead.dto';

@Injectable()
export class LeadsService {
  create(leadDto: LeadDto) {
    return 'This action adds a new lead';
  }

  findAll() {
    return `This action returns all leads`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lead`;
  }

  update(id: number, leadDto: LeadDto) {
    return `This action updates a #${id} lead`;
  }

  remove(id: number) {
    return `This action removes a #${id} lead`;
  }
}
