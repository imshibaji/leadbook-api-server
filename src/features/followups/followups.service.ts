import { Injectable } from '@nestjs/common';
import { FollowupDto } from './dto/followup.dto';

@Injectable()
export class FollowupsService {
  create(followupDto: FollowupDto) {
    return 'This action adds a new followup';
  }

  findAll() {
    return `This action returns all followups`;
  }

  findOne(id: number) {
    return `This action returns a #${id} followup`;
  }

  update(id: number, followupDto: FollowupDto) {
    return `This action updates a #${id} followup`;
  }

  remove(id: number) {
    return `This action removes a #${id} followup`;
  }
}
