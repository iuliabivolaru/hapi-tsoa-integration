import {Document} from 'mongoose';
import {Book} from '../../domains/Book';

export interface BookDocument extends Book, Document {

}