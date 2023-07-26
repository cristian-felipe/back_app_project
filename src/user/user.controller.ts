import { Body ,Controller, Get, Post, Param } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(
        private userService:UserService
    ){}

    @Get('all')
    findAll():Promise<User[]>{
        return this.userService.findAll();
    }

    @Post('create')
    crear(@Body() user:User):Promise<User>{
        return this.userService.crate(user)
    }

    @Get(':id')
    findOne(@Param('id') id:number){
        return this.userService.findById(id)
    }
}
