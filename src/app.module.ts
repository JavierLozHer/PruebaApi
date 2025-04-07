import {Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {CouponsModule} from './coupons/coupons.module';
import {Coupon} from './coupons/coupon/coupon';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'prueba',
        entities: [Coupon]
      }),
    CouponsModule
],
})
export class AppModule {}
