import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable, pipe, throwError } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Repository } from 'typeorm';
import { ProductEntity } from '../models/product.entity';
import { Product } from '../models/product.interface';
import { AuthService } from 'src/auth/services/auth.service';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
    private authService: AuthService,
  ) {}

  create(product: Product): Observable<Product> {
    return from(this.productRepository.save(product)).pipe(
      map((tempProduct: Product) => {
        const { ...result } = tempProduct;
        return result;
      }),
      catchError(err => throwError(err)),
    );
  }

  findOne(id: number): Observable<Product> {
    return from(this.productRepository.findOne({ id })).pipe(
      map((product: Product) => {
        const { ...result } = product;
        return result;
      }),
    );
  }

  findAll(): Observable<Product[]> {
    return from(this.productRepository.find()).pipe(
      map((products: Product[]) => products),
    );
  }

  deleteOne(id: number): Observable<any> {
    return from(this.productRepository.delete(id));
  }

  updateOne(id: number, product: Product): Observable<any> {
    return from(this.productRepository.update(id, product)).pipe(
      switchMap(() => this.findOne(id)),
    );
  }
}
