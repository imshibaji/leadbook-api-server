import { Deal } from './../deals/entities/deal.entity';
import { Lead } from './../leads/entities/lead.entity';
import { Business } from './../business/entities/business.entity';
import { Payment } from './entities/payment.entity';
import { Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { PaymentDto } from './dto/payment.dto';

@Injectable()
export class PaymentsService {
  constructor(
    @Inject('PAYMENT_REPOSITORY')
    private paymentRepository: Repository<Payment>
  ){}

  create(paymentDto: PaymentDto) {
    try {
      const payment = this.paymentRepository.create(paymentDto);
      return this.paymentRepository.save(payment);
    } catch (error) {
      console.log(error);
    }
  }

  findAll() {
    try {
      return this.paymentRepository.find({
        relations:['lead', 'deal', 'business']
      });
    } catch (error) {
      console.log(error);
    }
  }

  findOne(id: number) {
    try {
      return this.paymentRepository.findOne({
        where: {id}, 
        relations:['lead', 'deal', 'business']
      });
    } catch (error) {
      console.log(error);
    }
  }

  update(id: number, paymentDto: PaymentDto) {
    try {
      return this.paymentRepository.update(id, paymentDto);
    } catch (error) {
      console.log(error);
    }
    
  }

  remove(id: number) {
    try {
      return this.paymentRepository.delete(id);
    } catch (error) {
      console.log(error);
    }
  }

   // Lead Relation
   async addRelativeLead(payment:Payment, lead: Lead){
    try {
      await this.paymentRepository.createQueryBuilder().relation('lead').of(payment).set(lead);
    } catch (error) {
      return error;
    }
  }

  async removeRelativeLead(payment:Payment, lead: Lead){
    try {
      await this.paymentRepository.createQueryBuilder().relation(Payment,'lead').of(payment).set(null);
    } catch (error) {
      return error;
    }
  }

   // Deal Relation
   async addRelativeDeal(payment:Payment, deal: Deal){
    try {
      await this.paymentRepository.createQueryBuilder().relation(Payment, 'deal').of(payment).set(deal);
    } catch (error) {
      return error;
    }
  }

  async removeRelativeDeal(payment:Payment, deal: Deal){
    try {
      await this.paymentRepository.createQueryBuilder().relation(Payment,'deal').of(payment).set(null);
    } catch (error) {
      return error;
    }
  }

  // Business Relation
  async addRelativeBusiness(payment: Payment, business: Business){
    try {
      await this.paymentRepository.createQueryBuilder().relation(Payment, 'business').of(payment).set(business);
    } catch (error) {
      return error;
    }
  }
  async removeRelativeBusiness(payment: Payment, business: Business){
    try {
      await this.paymentRepository.createQueryBuilder().relation(Payment, 'business').of(payment).set(null);
    } catch (error) {
      return error;
    }
  }
}
