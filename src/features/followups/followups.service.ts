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
    return this.followupRepository.create(followupDto);
  }

  findAll() {
    return this.followupRepository.find();
  }

  findOne(id: number) {
    return this.followupRepository.findOne({where:{id}});
  }

  update(id: number, followupDto: FollowupDto) {
    return this.followupRepository.update(id, followupDto);
  }

  remove(id: number) {
    return this.followupRepository.delete(id);
  }
}
