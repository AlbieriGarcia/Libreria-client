import { Button, IconButton, Rating } from "@mui/material";
import type { Book } from "@/types/bookTypes";
import { JSX } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { setBookData } from "@/redux/features/bookDataSlice";
import DeleteButton from "./DeleteButton";
import { Edit } from "@mui/icons-material";

const BookCard = ({ params }: { params: Book }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathName = usePathname();

  const path = pathName.split("/")[1];

  const renderGenre = () => {
    const genres: JSX.Element[] = [];

    params.genre.forEach((genre: string, index: number) => {
      genres.push(
        <Button
          key={index}
          variant="outlined"
          className="bg-white border-black text-black rounded-full m-1 cursor-default"
        >
          {genre}
        </Button>
      );
    });

    return genres;
  };

  const handleNavigate = (type: string) => {
 
    dispatch(
      setBookData({
        _id: params._id ?? "",
        title: params.title ?? "",
        descripcion: params.descripcion ?? "",
        author: params.author ?? "",
        year: params.year ?? 0,
        genre: params.genre ?? [""],
        coverImage: params.coverImage ?? "",
        rating: params.rating ?? 0,
        isFavorite: params.isFavorite ?? false,
        userId: {
          _id: params.userId?._id ?? "",
          email: params.userId?.email ?? "",
          username: params.userId?.username ?? "",
        },
        createdAt: params.createdAt ?? "",
        updatedAt: params.updatedAt ?? "",
      })
    );

    if(type == "details"){
      router.push("/details");
    }
    else{
      router.push("/edit");
    }
    
  };

  return (
    <div
      className="border border-gray-300 rounded-lg p-5 w-[280px] h-[460px] bg-white shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-105"
      onClick={() => { handleNavigate("details")}}
    >
      <div>
        <h2 className="text-xl font-semibold mb-1">{params.title}</h2>
        <p className="text-gray-500 mb-1">{params.year}</p>
        <div className="flex justify-start mb-2">
          <div className="w-full h-[220px]">
            <img
              src={params.coverImage}
              alt={params.title}
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="flex items-center">
          <Rating
            name="user-rating"
            value={params.rating}
            precision={0.5}
            readOnly
          />
        </div>
        <div className="text-gray-500">{renderGenre()}</div>
      </div>
      {path == "my-books" ? (
        <div className="flex justify-end gap-2 mt-3">
          <div onClick={(e) => e.stopPropagation()}>
            <DeleteButton bookId={params._id} />
          </div>
          <div onClick={(e) => e.stopPropagation()}>
            <IconButton onClick={() => { handleNavigate("edit")}} className="">
              <Edit className="text-3xl text-blue-500" />
            </IconButton>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default BookCard;
