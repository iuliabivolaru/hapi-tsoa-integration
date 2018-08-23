import {Document} from 'mongoose';
import {Book} from '../../models/Book';

export interface BookDocument extends Book, Document {

}