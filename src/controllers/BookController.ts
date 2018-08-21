import {Book} from '../domains/Book';
import {Route, Post, Body, SuccessResponse} from 'tsoa';
import {SuperController} from './SuperController';
import BookService from '../services/BookService';
import {inject} from 'inversify';

@Route('books')
export class BookController extends SuperController {

    @inject('BookService')
    private bookService: BookService;

    @SuccessResponse('201')
    @Post()
    public create( @Body() book: Book): Promise<Book> {
        this.setCreatedHTTPStatus();
        return this.bookService.create(book);
    }

}