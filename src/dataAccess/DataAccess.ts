
import * as mongoose from 'mongoose';

export default class DataAccess {
    private static mongooseInstance: any;
    public static mongooseConnection: mongoose.Connection;
    public static schemas: [mongoose.Schema];

    public static connect(): mongoose.Connection {
        if (this.mongooseInstance) {
            return this.mongooseInstance;
        }
        this.mongooseConnection = mongoose.connection;
    
        this.mongooseInstance = mongoose.connect('mongodb://localhost/book-db');
        return this.mongooseInstance;
    }

    public static registerSchema(name: string, schema: mongoose.Schema) {
        DataAccess.mongooseConnection.model('medias', schema);
    }

}