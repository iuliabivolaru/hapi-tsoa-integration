import * as mongoose from 'mongoose';
import 'reflect-metadata';
require('mongoose').Promise = global.Promise;

export class CRUDRepository<T extends mongoose.Document>  {

    private model: mongoose.Model<T>;

    constructor( model: mongoose.Model<T>) {
        this.model = model;
    }

    public retrieve(callback?: (error: any, result: T[]) => void): Promise<T[]> {
        return this.model.find({}).exec();

    }
    
}

