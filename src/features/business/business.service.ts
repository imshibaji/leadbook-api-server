import { DeleteResult, Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { BusinessDto } from './dto/business.dto';
import { Business } from './entities/business.entity';
import { User } from '../users/entities/user.entity';
import { buildClientSchema } from 'graphql';

@Injectable()
export class BusinessService {
  constructor(
    @Inject('BUSINESS_REPOSITORY')
    private businessRepository: Repository<Business>,
  ){}

  async create(createBusinessInput: BusinessDto): Promise<Business> {
    try {
      const newBusiness = await this.businessRepository.create(createBusinessInput);
      return await this.businessRepository.save(newBusiness);
    } catch (error) {
      return error;
    }
  }

  async findAll(): Promise<Business[]> {
    try {
      return await this.businessRepository.find({relations: ['users']});
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number): Promise<Business> {
    try {
      return await this.businessRepository.findOne({
        where:{id},
        relations: ['users']
      });
    } catch (error) {
      return error;
    }
  }

  async update(id: number, updateBusinessInput: BusinessDto) {
    try {
      return await this.businessRepository.update(id, updateBusinessInput);
    } catch (error) {
      return error;
    }
  }

  async remove(id: number): Promise<DeleteResult> {  
    try {
      return await this.businessRepository.delete(id);
    } catch (error) {
      return error;
    }
  }
  
  // Relations Query Functions
  async addRelativeUser (business:Business, user: User) {
    try {
      await this.businessRepository.createQueryBuilder().relation(Business, 'users').of(business).add(user);
      return true;
    } catch (error) {
      return error;
    }
  }
  async switchRelativeUser (business:Business, oldUser:User, newUser?: User) {
    try {
      await this.businessRepository.createQueryBuilder().relation(Business, 'users').of(business).addAndRemove(newUser, oldUser);
      return true;
    } catch (error) {
      return error;
    }
  }
  async removeRelativeUser (business:Business, user:User) {
    try {
      await this.businessRepository.createQueryBuilder().relation(Business, 'users').of(business).remove(user);
      return true;
    } catch (error) {
      return error;
    }
  }
  removeRelativeUsers(business: Business, users: User[]){
    try {
      users.forEach(async user =>{
        await this.businessRepository.createQueryBuilder().relation(Business, 'users').of(business).remove(user);
      });
      return true;
    } catch (error) {
      return error;
    }
  }
}
