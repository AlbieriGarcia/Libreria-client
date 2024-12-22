import { Star, StarBorder } from "@mui/icons-material";
import { Button } from "@mui/material";
import type { Book } from "@/types/bookTypes";
import { JSX } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { setBookData } from "@/redux/features/bookDataSlice";
import DeleteButton from "./DeleteButton";

const BookCard = ({ params }: { params: Book }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathName = usePathname();

  const path = pathName.split("/")[1];

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < params.rating; i++) {
      stars.push(
        i < params.rating ? (
          <Star key={i} className="text-yellow-400" />
        ) : (
          <StarBorder key={i} className="text-yellow-400" />
        )
      );
    }
    return stars;
  };

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

  const handleOpenDetails = () => {
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

    router.push("/details");
  };

  return (
    <div
      className="border border-gray-300 rounded-lg p-5 w-[280px] h-[460px] bg-white shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-105"
      onClick={handleOpenDetails}
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
        <div className="flex items-center">{renderStars()}</div>
        <div className="text-gray-500">{renderGenre()}</div>
      </div>
      {path == "my-books" ? (
        <div className="flex justify-end gap-2 mt-3" onClick={(e) => e.stopPropagation()}>
          <DeleteButton bookId={params._id} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default BookCard;
