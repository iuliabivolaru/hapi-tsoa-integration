
import 'reflect-metadata';
import * as mongoose from 'mongoose';
import {injectable, unmanaged} from 'inversify';
require('mongoose').Promise = global.Promise;

@injectable()
export class CRUDRepository<T extends mongoose.Document>  {

    private model: mongoose.Model<mongoose.Document>;

    constructor( @unmanaged() model: mongoose.Model<mongoose.Document>) {
        this.model = model;
    }

    public retrieve(callback?: (error: any, result: [T]) => void): Promise<T[]> {
        return this.model.find({}).exec() as Promise<T[]>;
    }

}
