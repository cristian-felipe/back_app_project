import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@Controller('product')
export class ProductController {

    constructor(
        private productSevice:ProductService
    ){}


    @Get('all')
    findAll():Promise<Product[]>{
        return this.productSevice.findAll()
    }

    @Post('create')
    crear(@Body() product:Product):Promise<Product>{
        return this.productSevice.crate(product)
    }

}
