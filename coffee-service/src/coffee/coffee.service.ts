import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Coffee } from './coffee.model';

@Injectable()
export class CoffeeService {
    constructor(
        @Inject('COFFEE_MODEL')
        private coffeeModel: Model<Coffee>,
    ) { }

    async create(createCoffee: Coffee): Promise<Coffee> {
        const createdCoffee = new this.coffeeModel(createCoffee);
        return createdCoffee.save();
    }

    async findAll(): Promise<Coffee[]> {
        return this.coffeeModel.find().exec();
    }
}