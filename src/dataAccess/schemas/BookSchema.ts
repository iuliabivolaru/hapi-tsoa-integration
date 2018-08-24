import {Schema, model} from 'mongoose';
import {BookDocument} from '../models/BookDocument';

let bookSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, { collection: 'books' });

export let bookModel = model<BookDocument>('book', bookSchema);