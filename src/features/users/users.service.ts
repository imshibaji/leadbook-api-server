import { Business } from './../business/entities/business.entity';
import { Inject, Injectable } from '@nestjs/common';
import { Repository, UpdateResult } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ){}

  async create(createUserDto: UserDto){
    try {
      const user = this.userRepository.create(createUserDto);
      return await this.userRepository.save(user);
    } catch (error) {
      return error;
    }
  }

  async findAll(): Promise<User[]> {
    try{
      return await this.userRepository.find({relations:['businesses']});
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number): Promise<User> {
    try {
      return await this.userRepository.findOne({
        where:{id: id},
        relations:[ 'businesses']
      });
    } catch (error) {
       return error;
    }
  }

  async findByEmail(email: string): Promise<User> {
    try {
      return await this.userRepository.findOne({
        where:{email: email},
        relations:[ 'businesses']
      });
    } catch (error) {
      return error;
    }
    
  }

  async update(id: number, userDto: UserDto): Promise<UpdateResult> {
    try {
      return await this.userRepository.update(id, userDto);
    } catch (error) {
      return error;
    }
  }

  async remove(id: number) {
    try {
      return await this.userRepository.delete(id);
    } catch (error) {
      return error;
    }
  }

  async addRelativeBusiness (user: User, business:Business) {
    try {
      await this.userRepository.createQueryBuilder().relation(User, 'businesses').of(user).add(business);
    } catch (error) {
      return error;
    }
   
  }
  async switchRelativeBusiness (user: User, oldBusiness:Business, newBusiness:Business) {
    try{
      await this.userRepository.createQueryBuilder().relation(User, 'businesses').of(user).addAndRemove(newBusiness, oldBusiness);
    }catch(error){
      return error;
    }
  }
  async removeRelativeBusiness (user: User, business:Business) {
    try {
      await this.userRepository.createQueryBuilder().relation(User, 'businesses').of(user).remove(business);
    } catch (error) {
      return error;
    }
  }
  async removeRelativeUser(user: User, businesses: Business[]){
    try {
      businesses.forEach(async business =>{
        await this.userRepository.createQueryBuilder().relation(User, 'businesses').of(user).remove(business);
      });
    } catch (error) {
      return error;
    }
  }

}
