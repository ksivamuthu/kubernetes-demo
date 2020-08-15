import { Controller, Post, Body, Get } from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { Coffee } from './coffee.model';

@Controller('coffee')
export class CoffeeController {
    constructor(private readonly coffeeService: CoffeeService) { }

    @Post()
    async create(@Body() coffee: Coffee) {
        await this.coffeeService.create(coffee);
    }

    @Get()
    async findAll(): Promise<Coffee[]> {
        return await this.coffeeService.findAll();
    }
}
