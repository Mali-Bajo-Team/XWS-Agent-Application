import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.interface';
import { ProductService } from '../service/product.service';
import { catchError, map, tap } from 'rxjs/operators';
import { hasRoles } from 'src/auth/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { User, UserRole } from '../../user/models/user.interface';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  create(@Body() post: Product): Observable<Product | Object> {
    return this.productService.create(post).pipe(
      map((retProduct: Product) => retProduct),
      catchError(err => of({ error: err.message })),
    );
  }

  @Get(':id')
  findOne(@Param() params): Observable<Product> {
    return this.productService.findOne(params.id);
  }

  @Get()
  findAll(): Observable<Product[]> {
    return this.productService.findAll();
  }

  @hasRoles(UserRole.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete(':id')
  deleteOne(@Param('id') id: string): Observable<any> {
    return this.productService.deleteOne(Number(id));
  }
}
