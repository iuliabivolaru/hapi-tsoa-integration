import 'reflect-metadata';
import {bookModel} from '../dataAccess/schemas/BookSchema';
import {BookDocument} from '../dataAccess/models/BookDocument';
import {CRUDRepository} from './CRUDRepository';

class BookRepository extends CRUDRepository<BookDocument> {
    constructor() {
        super(bookModel);
    }
}

export default new BookRepository();
