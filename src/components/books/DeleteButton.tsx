import { Delete } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import toast from "react-hot-toast"
import { deleteBook } from "@/libs/Books/BooksRequest"
import { useDispatch } from "react-redux"
import { toggleUpdate } from "@/redux/features/updateComponentsSlice"

const DeleteButton = ({bookId} : {bookId: string}) => {
    const dispatch = useDispatch();
    
    const handleDeleteBook = () => {
        deleteBook(bookId).then(response => {
            toast.success(response.message);
            dispatch(toggleUpdate())
        })
    }
    return(
        <IconButton onClick={handleDeleteBook} className="">
            <Delete className="text-3xl text-red-400" />
        </IconButton>
    )
}

export default DeleteButton