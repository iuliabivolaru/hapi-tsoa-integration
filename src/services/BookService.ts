
import 'reflect-metadata';
import { Book } from '../models/Book';
import { injectable, inject } from 'inversify';
import { BookRepository } from '../repositories/BookRepository';

@injectable()
export class BookService {

    @inject('BookRepository')
    private bookRepository: BookRepository;

    public retrieve(): Promise<Book[]> {
        return this.bookRepository.retrieve();
    }
}

