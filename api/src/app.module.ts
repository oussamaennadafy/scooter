import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './modules/Auth/auth.module';
import { TravelModule } from './modules/Travel/travel.module';
import { UsersModule } from './modules/users/users.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    AuthModule,
    TravelModule,
    MongooseModule.forRoot('mongodb://localhost/EScooter'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
