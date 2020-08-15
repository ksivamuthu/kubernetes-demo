import { Module } from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { CoffeeController } from './coffee.controller';
import { coffeeProviders } from './coffee.providers';
import { DatabaseModule } from '../database.module';

@Module({
  imports: [DatabaseModule],
  providers: [CoffeeService, ...coffeeProviders],
  controllers: [CoffeeController]
})
export class CoffeeModule { }
