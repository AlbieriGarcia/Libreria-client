"use client"

import { useAppSelector } from "@/redux/hooks";
import BookForm from "./BookForm"

const EditBook = () => {
     const bookData = useAppSelector((state) => state.bookDataState);
      
    return(
        <BookForm type="edit" data={bookData}/>
    )
}

export default EditBook