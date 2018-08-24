import {Book} from '../models/Book';
import {Route, Get} from 'tsoa';
import {SuperController} from './SuperController';
import BookService from '../services/BookService';
import "reflect-metadata";

@Route('books')
export class BookController extends SuperController {

    @Get()
    public retrieve(): Promise<Book[]> {
        this.setCreatedHTTPStatus();
        return BookService.retrieve()
            .then(books => {
                console.info(`Received books => ${JSON.stringify(books)}`);
                if (books.length) {
                    return books;
                }
                this.setStatus(404);
                return books;
            }).catch(err => {
                console.error(err.message);
                throw err;
            })
    }

}