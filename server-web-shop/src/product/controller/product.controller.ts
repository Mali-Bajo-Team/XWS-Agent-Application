import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
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
import got from 'got';

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
  async findAll(): Promise<Observable<Product[]>> {
    const {body} = await got.post('http://localhost:5000/api', {
    json: {
      "report" : "mama mojaaaa"
    },
  	responseType: 'json'
    });
    console.log(body);
    return this.productService.findAll();
  }

  @Put(':id')
  updateOne(
    @Param('id') id: string,
    @Body() product: Product,
  ): Observable<any> {
    return this.productService.updateOne(Number(id), product);
  }

  @hasRoles(UserRole.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete(':id')
  deleteOne(@Param('id') id: string): Observable<any> {
    return this.productService.deleteOne(Number(id));
  }
}
