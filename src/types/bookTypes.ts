import type {User} from './userTypes'
import type {ReviewsDetail} from './reviewsTypes'
import { Favorite } from './favoriteType';

export type Book = {
  _id: string;
  title: string;
  descripcion: string;
  author: string;
  year: number;
  genre: string[];
  coverImage: string;
  rating: number;
  favorite?: Favorite;
  userId: User;
  createdAt: string;
  updatedAt: string;
};

export type BooksDetail = {
  bookDT: Book,
  reviews?: Array<ReviewsDetail>
}
