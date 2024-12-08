"use client";

import { useEffect, useState } from "react";
import BookCard from "./BookCard";
import type { Book } from "@/types/bookTypes";

import { getBooks } from "@/libs/Books/BooksRequest";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const BookList = () => {
  const filter = useAppSelector((state) => state.filterBookReducer);
  const [books, setBooks] = useState<Array<Book>>();

  useEffect(() => {
    getBooks(filter).then((response) => {
      setBooks(response.data);
    });
  }, [filter]);

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-6xl flex flex-wrap justify-start">
        {books?.map((option) => (
          <div
            key={option._id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 flex justify-center"
          >
            <BookCard params={option} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
