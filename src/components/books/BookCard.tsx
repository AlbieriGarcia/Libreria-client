import { Button, IconButton, Rating } from "@mui/material";
import type { Book } from "@/types/bookTypes";
import { JSX } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { setBookData } from "@/redux/features/bookDataSlice";
import DeleteButton from "./DeleteButton";
import { Edit, Favorite, FavoriteBorder } from "@mui/icons-material";
import { setFavorite } from "@/libs/Books/FavoritesRequest";
import { toggleUpdate } from "@/redux/features/updateComponentsSlice";
import { motion } from "framer-motion";

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
        favorite: {
          _id: params.favorite?._id ?? "",
          isFavorite: params.favorite?.isFavorite ?? false,
          bookId: params.favorite?.bookId ?? "",
        },
        userId: {
          _id: params.userId?._id ?? "",
          email: params.userId?.email ?? "",
          username: params.userId?.username ?? "",
        },
        createdAt: params.createdAt ?? "",
        updatedAt: params.updatedAt ?? "",
      })
    );

    if (type == "details") {
      router.push("/details");
    } else {
      router.push("/edit");
    }
  };

  const handleSetFavorite = () => {
    const data = {
      bookId: params.favorite?.bookId ?? params._id,
      favoriteId: params.favorite?._id,
      isFavorite: !params.favorite?.isFavorite,
    };

    setFavorite(data).then((response) => {
      if (response.success) {
        dispatch(toggleUpdate());
      }
    });
  };

  return (
    <div
      className="border border-gray-300 rounded-lg p-5 w-[280px] h-[460px] bg-white shadow-md cursor-pointer"
      onClick={() => {
        handleNavigate("details");
      }}
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
      {path == "home" ? (
        <div className="flex justify-end gap-2 mt-3">
          <div onClick={(e) => e.stopPropagation()}>
            <motion.div
              onClick={() => {
                handleSetFavorite();
              }}
              animate={
                params.favorite?.isFavorite
                  ? {
                      scale: [1, 1.2, 1],
                    }
                  : { scale: [1] }
              }
              transition={{
                duration: 0.6,
                repeat: params.favorite?.isFavorite ? 1 : 0,
                repeatType: "loop",
              }}
              style={{
                fontSize: "3rem",
                color: "red",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {params.favorite?.isFavorite ? (
                <Favorite className="text-3xl text-red-500" />
              ) : (
                <FavoriteBorder className="text-3xl text-gray-800 hover:text-red-500" />
              )}
            </motion.div>
          </div>
        </div>
      ) : (
        <div className="flex justify-end gap-2 mt-3">
          <div onClick={(e) => e.stopPropagation()}>
            <DeleteButton bookId={params._id} />
          </div>
          <div onClick={(e) => e.stopPropagation()}>
            <IconButton
              onClick={() => {
                handleNavigate("edit");
              }}
              className=""
            >
              <Edit className="text-3xl text-blue-500" />
            </IconButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookCard;
