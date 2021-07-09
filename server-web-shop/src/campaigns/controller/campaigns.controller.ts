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
  import { Campaigns } from '../models/campaigns.interface';
  import { CampaignsService } from '../service/campaigns.service';
  import { catchError, map, tap } from 'rxjs/operators';
  import { UserRole } from '../../user/models/user.interface';
import { hasRoles } from 'src/auth/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
  
  @Controller('campaigns')
  export class CampaignsController {
    constructor(private campaignsService: CampaignsService) {}
  
    @Post()
    create(@Body() post: Campaigns): Observable<Campaigns | Object> {
      return this.campaignsService.create(post).pipe(
        map((retCampaign: Campaigns) => retCampaign),
        catchError(err => of({ error: err.message })),
      );
    }
  
    @Get(':id')
    findOne(@Param() params): Observable<Campaigns> {
      return this.campaignsService.findOne(params.id);
    }
  
    @Get()
    findAll(): Observable<Campaigns[]> {
      return this.campaignsService.findAll();
    }
  
    @Put(':id')
    updateOne(
      @Param('id') id: string,
      @Body() campaign: Campaigns,
    ): Observable<any> {
      return this.campaignsService.updateOne(Number(id), campaign);
    }
  
    @hasRoles(UserRole.ADMIN)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete(':id')
    deleteOne(@Param('id') id: string): Observable<any> {
      return this.campaignsService.deleteOne(Number(id));
    }
  }
  