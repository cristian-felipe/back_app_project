import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User) private readonly userRepository:Repository<User>
    ){}

    async findAll():Promise<User[]>{
        return this.userRepository.find();
    }

    async crate(user:User):Promise<User>{
        const newUser = await this.userRepository.create(user)
        return await this.userRepository.save(newUser)
    }

    async findById(id:number):Promise<User>{
        return this.userRepository.findOne({where:{id:id}})
    }
}
