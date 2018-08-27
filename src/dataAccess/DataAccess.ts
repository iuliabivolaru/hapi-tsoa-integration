import {Connection, Schema, connect, connection } from 'mongoose';

export default class DataAccess {
    private static mongooseInstance: any;
    public static mongooseConnection: Connection;
    public static schemas: [Schema];
    public static mongoUrl: string = 'mongodb://localhost/book-db';  

    public static connect(): Connection {
        if (this.mongooseInstance) {
            return this.mongooseInstance;
        }
        this.mongooseConnection = connection;
    
        this.mongooseInstance = connect(this.mongoUrl);
        return this.mongooseInstance;
    }

    public static registerSchema(name: string, schema: Schema) {
        DataAccess.mongooseConnection.model('medias', schema);
    }

}

