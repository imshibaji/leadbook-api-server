import { Injectable } from '@nestjs/common';
import { PaymentDto } from './dto/payment.dto';

@Injectable()
export class PaymentsService {
  create(paymentDto: PaymentDto) {
    return 'This action adds a new payment';
  }

  findAll() {
    return `This action returns all payments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} payment`;
  }

  update(id: number, paymentDto: PaymentDto) {
    return `This action updates a #${id} payment`;
  }

  remove(id: number) {
    return `This action removes a #${id} payment`;
  }
}
