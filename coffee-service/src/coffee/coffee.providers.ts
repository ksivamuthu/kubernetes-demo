import { Connection } from 'mongoose';
import { CoffeeSchema } from '../schemas/coffee.schema';

export const coffeeProviders = [
    {
        provide: 'COFFEE_MODEL',
        useFactory: (connection: Connection) => connection.model('Coffee', CoffeeSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];