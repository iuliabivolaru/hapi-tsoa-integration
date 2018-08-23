import {Book} from '../models/Book';
import {Route, Post, Body, SuccessResponse, Get} from 'tsoa';
import {SuperController} from './SuperController';
import {BookService} from '../services/BookService';
import "reflect-metadata";
import { inject } from 'inversify';

@Route('books')
export class BookController extends SuperController {

    @inject('BookService')
    private bookService: BookService;

    @Get()
    public retrieve(): Promise<Book[]> {
        this.setCreatedHTTPStatus();
        return this.bookService.retrieve();
    }

}