import type {User} from './userTypes'

export type Book = {
  _id: string;
  title: string;
  descripcion: string;
  author: string;
  year: number;
  genre: string[];
  coverImage: string;
  rating: number;
  isFavorite: boolean;
  userId: User;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
