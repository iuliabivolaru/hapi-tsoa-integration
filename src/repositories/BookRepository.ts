import 'reflect-metadata';
import {bookModel} from '../dataAccess/schemas/BookSchema';
import {BookDocument} from '../dataAccess/models/BookDocument';
import {CRUDRepository} from './CRUDRepository';
import {injectable} from 'inversify';

@injectable()
export default class BookRepository extends CRUDRepository<BookDocument> {
    constructor() {
        super(bookModel);
    }
}