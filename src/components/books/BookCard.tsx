import { Star, StarBorder } from "@mui/icons-material";
import { Button } from "@mui/material";
import type { Book } from "@/types/bookTypes";
import { JSX } from "react";

const BookCard = ({params}: {params: Book}) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < params.rating; i++) {
          stars.push(
            i < params.rating ? (
              <Star key={i}  className="text-yellow-400" />
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

  return (
    <div className="border border-gray-300 rounded-lg p-5 w-[280px] h-[440px] bg-white shadow-md">
      <h2 className="text-xl font-semibold mb-1">{params.title}</h2>
      <p className="text-gray-500 mb-1">{params.year}</p>
      <div className="flex justify-start mb-2">
        <div className="w-full h-[220px]">
            <img src={params.coverImage} alt={params.title} className="w-full h-full" />
        </div>
      </div>
      <div className="flex items-center">{renderStars()}</div>
      <div className="text-gray-500">{renderGenre()}</div>
    </div>
  );
};

export default BookCard;
