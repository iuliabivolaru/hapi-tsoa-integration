
import 'reflect-metadata';
import * as mongoose from 'mongoose';
import {injectable, unmanaged} from 'inversify';
require('mongoose').Promise = global.Promise;

@injectable()
export class CRUDRepository<T extends mongoose.Document>  {

    private model: mongoose.Model<mongoose.Document>;

    constructor( model: mongoose.Model<mongoose.Document>) {
        this.model = model;
    }

    public create(item: T): Promise<T> {
        return this.model.create(item) as Promise<T>;
    }

}