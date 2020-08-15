import * as mongoose from 'mongoose';

export const CoffeeSchema = new mongoose.Schema({
    name: String,
    desc: String,
});