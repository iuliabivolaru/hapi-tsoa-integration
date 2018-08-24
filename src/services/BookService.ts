
import 'reflect-metadata';
import { Book } from '../models/Book';
import BookRepository from '../repositories/BookRepository';

class BookService {

    public retrieve(): Promise<Book[]> {
        return BookRepository.retrieve();
    }
}

export default new BookService();

