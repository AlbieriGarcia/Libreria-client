"use client";

import { useEffect, useState } from "react";
import BookCard from "./BookCard";
import type { Book } from "@/types/bookTypes";

import { getBooks, getMyBooks } from "@/libs/Books/BooksRequest";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { Pagination } from "@mui/material";
import { Page } from "@/types/pageType";
import QuantitiesButton from "./QuantitiesButton";
import ExportCsv from "./ExportCsv";

const BookList = ({ from }: { from: string }) => {
  const filter = useAppSelector((state) => state.filterBookState);
  const bookQtyState = useAppSelector((state) => state.bookQtyState);
  const updateState = useAppSelector(
    (state: RootState) => state.updateComponentState.updateState
  );
  const [books, setBooks] = useState<Array<Book>>();
  const [pageInfo, setPageInfo] = useState<Page>();
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    setPage(1);
  }, [filter, bookQtyState]);

  useEffect(() => {
    const params = {
      filter: filter,
      page: page,
      bookQt: bookQtyState.bookQty
    };

    if (from == "home") {
      getBooks(params).then((response) => {
        setPageInfo(response.pageInfo);
        setBooks(response.data);
      });
    } else if (from == "my-books") {
      getMyBooks(params).then((response) => {
        setPageInfo(response.pageInfo);
        setBooks(response.data);
      });
    }
  }, [filter, updateState, page, bookQtyState]);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between w-full max-w-6xl my-4">
        <div className="flex justify-start w-1/2 ml-3 relative">
          <QuantitiesButton />
          <div className="flex justify-center items-center ml-4">
            <ExportCsv filter={filter} page={page} bookQt={bookQtyState.bookQty}/>
          </div>
        </div>

        <div className="flex justify-end w-1/2 mr-2">
          <Pagination
            count={pageInfo?.totalPages ?? 1}
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={handleChangePage}
          />
        </div>
      </div>

      <div className="w-full max-w-6xl flex flex-wrap justify-start mt-4">
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
