import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Repository } from 'typeorm';
import { ProductEntity } from '../models/product.entity';
import { Product } from '../models/product.interface';
import { AuthService } from 'src/auth/services/auth.service';

@Injectable()
export class ProductService {

    constructor(
        @InjectRepository(ProductEntity) private readonly productRepository: Repository<ProductEntity>,
        private authService: AuthService
    ) {}

    findOne(id: number): Observable<Product> {
        return from(this.productRepository.findOne({id})).pipe(
            map((product: Product) => {
                const {name, ...result} = product;
                return result;
            } )
        )
    }

    deleteOne(id: number): Observable<any> {
        return from(this.productRepository.delete(id));
    }
}
