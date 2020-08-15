import { Document } from 'mongoose';

export interface Coffee extends Document {
    readonly name: string;
    readonly desc: string;
}