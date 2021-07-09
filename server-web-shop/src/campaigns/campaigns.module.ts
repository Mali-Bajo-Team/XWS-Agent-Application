import { Module } from '@nestjs/common';
import { CampaignsController } from './controller/campaigns.controller';
import { CampaignsService } from './service/campaigns.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CampaignsEntity } from './models/campaigns.entity';
import { AuthModule } from 'src/auth/auth.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([CampaignsEntity]),
    AuthModule,
    UserModule
  ],
  providers: [CampaignsService],
  controllers: [CampaignsController],
  exports: [CampaignsService]
})
export class CampaignsModule {}
