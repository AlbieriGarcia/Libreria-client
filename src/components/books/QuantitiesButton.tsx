import { GridViewOutlined } from "@mui/icons-material";
import { ClickAwayListener } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setBookQty } from "@/redux/features/bookQtySlice";

const QuantitiesButton = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const bookQts = [8, 16, 32];

  const handleSetQT = (qt: number) => {
    setIsOpen(false);
    dispatch(setBookQty({ bookQty: qt }));
  };

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center cursor-pointer rounded-full bg-black w-[120px] h-[40px]"
      >
        <div>
          <GridViewOutlined className="text-white text-[20px]" />
        </div>
        <div className="text-white ml-1">Cantidad</div>
      </div>

      {isOpen && (
        <ClickAwayListener onClickAway={() => setIsOpen(false)}>
          <div className="absolute top-full left-0 flex flex-col items-start p-2 w-[120px] bg-slate-100 mt-2 rounded-lg border border-black z-50">
            {bookQts.map((qt, index) => (
              <div
                key={index}
                className="flex justify-center w-full hover:bg-slate-300 cursor-pointer rounded-lg"
                onClick={() => handleSetQT(qt)}
              >
                {qt}
              </div>
            ))}
          </div>
        </ClickAwayListener>
      )}
    </>
  );
};

export default QuantitiesButton;
