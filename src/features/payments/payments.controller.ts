import { BusinessService } from './../business/business.service';
import { DealsService } from './../deals/deals.service';
import { LeadsService } from './../leads/leads.service';
import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentDto } from './dto/payment.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Payments')
@Controller('payments')
export class PaymentsController {
  constructor(
    private readonly paymentsService: PaymentsService,
    private readonly leadsService: LeadsService,
    private readonly dealsService: DealsService,
    private readonly businessService: BusinessService,
  ) {}
  @Get()
  findAll() {
    return this.paymentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentsService.findOne(+id);
  }

  @Post()
  create(@Body() paymentDto: PaymentDto) {
    return this.paymentsService.create(paymentDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() paymentDto: PaymentDto) {
    return this.paymentsService.update(+id, paymentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentsService.remove(+id);
  }

  @Put('lead-add/:pid/:lid')
  async addLead(@Param('pid') pid:number, @Param('lid') lid:number){
    const payment = await this.paymentsService.findOne(+pid);
    const lead = await this.leadsService.findOne(+lid);

    const error = this.paymentsService.addRelativeLead(payment, lead);

    if(error == null){
      return {message: 'Payment linked with Lead'};
    }else{
      return error;
    }
  }
  @Delete('lead-remove/:pid/:lid')
  async removeLead(@Param('pid') pid:number, @Param('lid') lid:number){
    const payment = await this.paymentsService.findOne(pid);
    const lead = await this.leadsService.findOne(lid);

    const error = this.paymentsService.removeRelativeLead(payment, lead);

    if(error == null){
      return {message: 'Payment linked with Lead'};
    }else{
      return error;
    }
  }

  @Put('deal-add/:pid/:did')
  async addDeal(@Param('pid') pid:number, @Param('did') did:number){
    const payment = await this.paymentsService.findOne(pid);
    const deal = await this.dealsService.findOne(did);

    const error = this.paymentsService.addRelativeDeal(payment, deal);

    if(error == null){
      return {message: 'Payment linked with Deal'};
    }else{
      return error;
    }
  }
  @Delete('deal-remove/:pid/:did')
  async removeDeal(@Param('pid') pid:number, @Param('did') did:number){
    const payment = await this.paymentsService.findOne(pid);
    const deal = await this.dealsService.findOne(did);

    const error = this.paymentsService.removeRelativeDeal(payment, deal);

    if(error == null){
      return {message: 'Payment linked with Deal'};
    }else{
      return error;
    }
  }

  @Put('business-add/:pid/:bid')
  async addBusiness(@Param('pid') pid:number, @Param('bid') bid:number){
    const payment = await this.paymentsService.findOne(pid);
    const business = await this.businessService.findOne(bid);

    const error = this.paymentsService.addRelativeBusiness(payment, business);

    if(error == null){
      return {message: 'Payment linked with Business'};
    }else{
      return error;
    }
  }
  @Delete('business-remove/:pid/:bid')
  async removeBusiness(@Param('pid') pid:number, @Param('bid') bid:number){
    const payment = await this.paymentsService.findOne(pid);
    const business = await this.businessService.findOne(bid);

    const error = this.paymentsService.removeRelativeBusiness(payment, business);

    if(error == null){
      return {message: 'Payment linked with Business'};
    }else{
      return error;
    }
  }
}
