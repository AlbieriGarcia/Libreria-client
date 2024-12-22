import { Star } from "@mui/icons-material";
import {  useState } from "react";

const StarComponent = ({startSelected, startQty = 0} : {startSelected: (num: number) => void, startQty?: number}) => {
  const [calification, setCalification] = useState(startQty);

  const handleStarsSelected = (starNumber: number) => {
    setCalification(starNumber);
    startSelected(starNumber);
  };

  return (
    <div>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          onClick={() => {
            handleStarsSelected(i + 1);
          }}
          key={i}
          className={`text-[40px] ${
            i < calification ? "text-yellow-300" : "text-slate-300"
          } cursor-pointer`}
        />
      ))}
    </div>
  );
};

export default StarComponent;
