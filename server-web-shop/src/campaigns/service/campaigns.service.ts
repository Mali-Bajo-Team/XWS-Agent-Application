import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable, pipe, throwError } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Repository } from 'typeorm';
import { CampaignsEntity } from '../models/campaigns.entity';
import { Campaigns } from '../models/campaigns.interface';
import { AuthService } from 'src/auth/services/auth.service';

@Injectable()
export class CampaignsService {
  constructor(
    @InjectRepository(CampaignsEntity)
    private readonly campaignsRepository: Repository<CampaignsEntity>,
    private authService: AuthService,
  ) {}

  create(campaign: Campaigns): Observable<Campaigns> {
    return from(this.campaignsRepository.save(campaign)).pipe(
      map((tempProduct: Campaigns) => {
        const { ...result } = tempProduct;
        return result;
      }),
      catchError(err => throwError(err)),
    );
  }

  findOne(id: number): Observable<Campaigns> {
    return from(this.campaignsRepository.findOne({ id })).pipe(
      map((campaign: Campaigns) => {
        const { ...result } = campaign;
        return result;
      }),
    );
  }

  findAll(): Observable<Campaigns[]> {
    return from(this.campaignsRepository.find()).pipe(
      map((campaigns: Campaigns[]) => campaigns),
    );
  }

  deleteOne(id: number): Observable<any> {
    return from(this.campaignsRepository.delete(id));
  }

  updateOne(id: number, campaign: Campaigns): Observable<any> {
    return from(this.campaignsRepository.update(id, campaign)).pipe(
      switchMap(() => this.findOne(id)),
    );
  }
}
