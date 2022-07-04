import { UsersService } from './../users/users.service';
import { JwtAuthGuard } from './../../auth/guards/jwt-auth.guard';
import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FormDataRequest } from 'nestjs-form-data';
import { BusinessService } from './business.service';
import { BusinessDto } from './dto/business.dto';

@Controller('business')
@ApiTags('Business')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard)
export class BusinessController {
  constructor(
    private businessService: BusinessService, 
    private userService: UsersService
  ) {}

  @Get()
  @ApiResponse({description:'Get All Business Data Response' , status: 200})
  findAll() {
    return this.businessService.findAll();
  }

  @Get(':id')
  @ApiResponse({description:'Get Single Business Data Response' , status: 200})
  findOne(@Param('id') id: string) {
    return this.businessService.findOne(+id);
  }


  @Post()
  @FormDataRequest()
  @ApiCreatedResponse({description: 'New Business Creation', status:201})
  create(@Body() createUserDto: BusinessDto) {
    return this.businessService.create(createUserDto);
  }

  @Patch(':id')
  @FormDataRequest()
  @ApiResponse({description:'Business Update Data Response' , status: 200})
  @ApiBody({type: BusinessDto})
  update(@Param('id') id: string, @Body() updateUserDto: BusinessDto) {
    return this.businessService.update(+id, updateUserDto);
  }

  @Put('add-user/:bid/:uid')
  @ApiResponse({description:'Add new user with Business' , status: 200})
  async addUser(@Param('bid') bid: string, @Param('uid') uid: string) {
    const business = await this.businessService.findOne(+bid);
    const user = await this.userService.findOne(+uid);
    const check= await this.businessService.addRelativeUser(business, user);;
    if(check){
      return {message: 'User added with the business'};
    }else{
      return check;
    }
  }

  @Delete('remove-user/:bid/:uid')
  @ApiResponse({description:'Add new user with Business' , status: 200})
  async removeUser(@Param('bid') bid: string, @Param('uid') uid: string) {
    const business = await this.businessService.findOne(+bid);
    const user = await this.userService.findOne(+uid);
    const check = await this.businessService.removeRelativeUser(business, user);
    if(check == null){
      return {message: 'User removed from the business'};
    }else{
      return check;
    }
  }

  @Delete(':id')
  @ApiResponse({description:'Business Data Delete Response' , status: 200})
  remove(@Param('id') id: string) {
    return this.businessService.remove(+id);
  }
}
