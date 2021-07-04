import { Controller, Delete, Get, Param, UseGuards } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Product } from '../models/product.interface';
import { ProductService } from '../service/product.service';
import { hasRoles } from 'src/auth/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { User, UserRole } from '../../user/models/user.interface';

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService) { }

    @Get(':id')
    findOne(@Param() params): Observable<Product> {
        return this.productService.findOne(params.id);
    }

    @hasRoles(UserRole.ADMIN)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete(':id')
    deleteOne(@Param('id') id: string): Observable<any> {
        return this.productService.deleteOne(Number(id));
    }
}
