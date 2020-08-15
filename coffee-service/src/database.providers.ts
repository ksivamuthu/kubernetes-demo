import * as mongoose from 'mongoose';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: (): Promise<typeof mongoose> =>
            mongoose.connect(`mongodb://admin:Dnrs41Bq60@mongodb.svc.cluster.local/coffee`, { useNewUrlParser: true }),
    },
];