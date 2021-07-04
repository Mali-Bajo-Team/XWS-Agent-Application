import { Controller, Delete, Get, Param, UseGuards } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Product } from '../models/product.interface';
import { ProductService } from '../service/product.service';

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService) { }

    @Get(':id')
    findOne(@Param() params): Observable<Product> {
        return this.productService.findOne(params.id);
    }

    @Delete(':id')
    deleteOne(@Param('id') id: string): Observable<any> {
        return this.productService.deleteOne(Number(id));
    }
}
