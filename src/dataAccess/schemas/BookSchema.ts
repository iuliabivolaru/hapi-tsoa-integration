import * as mongoose from 'mongoose';
import {BookDocument} from '../models/BookDocument';

let bookSchema: mongoose.Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
});

export let bookModel = mongoose.model<BookDocument>('book', bookSchema);