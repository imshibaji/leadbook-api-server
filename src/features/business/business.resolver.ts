import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BusinessService } from './business.service';
import { BusinessDto } from './dto/business.dto';

@Resolver('Business')
export class BusinessResolver {
  constructor(private readonly businessService: BusinessService) {}

  @Mutation('createBusiness')
  create(@Args('createBusinessInput') createBusinessInput: BusinessDto) {
    return this.businessService.create(createBusinessInput);
  }

  @Query('business')
  findAll() {
    return this.businessService.findAll();
  }

  @Query('business')
  findOne(@Args('id') id: number) {
    return this.businessService.findOne(id);
  }

  @Mutation('updateBusiness')
  update(@Args('updateBusinessInput') updateBusinessInput: BusinessDto) {
    return this.businessService.update(updateBusinessInput.id, updateBusinessInput);
  }

  @Mutation('removeBusiness')
  remove(@Args('id') id: number) {
    return this.businessService.remove(id);
  }
}
