import { BusinessService } from './../business/business.service';
import { JwtAuthGuard } from './../../auth/guards/jwt-auth.guard';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { FormDataRequest } from 'nestjs-form-data';
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateResult } from 'typeorm';

@Controller('users')
@ApiTags('Users')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(
    private usersService: UsersService,
    private businessService: BusinessService,
  ) {}

  @Get()
  @ApiResponse({description:'Get All User Data Response' , status: 200})
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiResponse({description:'Get Single User Data Response', status: 200})
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Post()
  @FormDataRequest()
  @ApiCreatedResponse({ description: 'This is the new User Creation API', status: 201})
  @ApiBody({type: UserDto})
  create(@Body() createUserDto: UserDto) {    
      return this.usersService.create(createUserDto);
  }

  @Patch(':id')
  @FormDataRequest()
  @ApiResponse({description: 'User Updated Response', status: 200})
  @ApiBody({type: UserDto})
  update(@Param('id') id: string, @Body() userDto: UserDto) {
    return this.usersService.update(+id, userDto);
  }

  @Put('add-business/:uid/:bid')
  @ApiResponse({description: 'Add new Business with User', status: 200})
  async addBusiness(@Param('uid') uid: string,@Param('bid') bid: string) {
    const user = await this.usersService.findOne(+uid);
    const biz = await this.businessService.findOne(+bid);
    await this.usersService.addRelativeBusiness(user, biz);
    return await this.usersService.findOne(+uid);
  }

  @Delete('remove-business/:uid/:bid')
  @ApiResponse({description: 'Remove Business with User', status: 200})
  async removeBusiness(@Param('uid') uid: string,@Param('bid') bid: string) {
    const user = await this.usersService.findOne(+uid);
    const biz = await this.businessService.findOne(+bid);
    await this.usersService.removeRelativeBusiness(user, biz);
    return await this.usersService.findOne(+uid);
  }

  @Delete(':id')
  @ApiResponse({description:'Delete User Data', status: 200})
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
