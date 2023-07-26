import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {

    constructor(
        @InjectRepository(Product) private readonly productRepository: Repository<Product>
    ){}

    async findAll():Promise<Product[]>{
        return await this.productRepository.find();
    }

    async crate(product:Product):Promise<Product>{
        const newProduct = await this.productRepository.create(product)
        return await this.productRepository.save(newProduct)
    }
}
