
import 'reflect-metadata';
import BookRepository from '../repositories/BookRepository';
import { BookDocument } from '../dataAccess/models/BookDocument';
import { Book } from '../domains/Book';
import { injectable, inject } from 'inversify';

@injectable()
export default class BookService {

    @inject('BookRepository')
    private bookRepository: BookRepository;

    public create(item: Book): Promise<Book> {
        return this.bookRepository.create(<BookDocument>item);
    }

}