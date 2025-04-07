import {Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {CouponsController} from './coupons.controller';
import {CouponsService} from './coupons.service';
import {Coupon} from './coupon/coupon';

@Module({
    imports: [TypeOrmModule.forFeature([Coupon])],
    controllers: [CouponsController],
    providers: [CouponsService],
})
export class CouponsModule {}