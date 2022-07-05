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
    return this.paymentRepository.create(paymentDto);
  }

  findAll() {
    return this.paymentRepository.find();
  }

  findOne(id: number) {
    return this.paymentRepository.findOne({where: {id}});
  }

  update(id: number, paymentDto: PaymentDto) {
    return this.paymentRepository.update(id, paymentDto);
  }

  remove(id: number) {
    return this.paymentRepository.delete(id);
  }
}
