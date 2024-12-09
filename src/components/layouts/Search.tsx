"use client";

import {
  Button,
  ClickAwayListener,
  IconButton,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useAppDispatch } from "@/redux/hooks";
import { setAllFilters } from "@/redux/features/filterBookSlice";
import { useEffect, useState } from "react";
import { getAuthors, getGenres, getYears } from "@/libs/Books/BooksRequest";

type bookFilter = {
  title?: string;
  genre?: string;
  year?: number;
  author?: string;
};

const Search = () => {
  const dispatch = useAppDispatch();
  const defaultData: bookFilter = {
    title: "",
    genre: "",
    year: 0,
    author: "",
  };

  const [localFilter, setLocalFilter] = useState<bookFilter>(defaultData);
  const [isOpen, setIsOpen] = useState(false);
  const [filterData, setFillterData] = useState<Array<string>>();
  const [currentFilter, setCurrentFilter] = useState<
    "genre" | "author" | "year" | ""
  >("");

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleFilter();
    }
  };

  const handleFilter = () => {
    dispatch(
      setAllFilters({
        title: localFilter.title ?? "",
        genre: localFilter.genre ?? "",
        year: localFilter.year ?? 0,
        author: localFilter.author ?? "",
      })
    );
  };

  useEffect(() => {
    handleFilter();
  }, [localFilter.genre, localFilter.author, localFilter.year]);

  const handleOpen = (type: string) => {
    setIsOpen((prev) => !prev);

    if (type == "genre") {
      getGenres().then((response) => {
        setCurrentFilter("genre");
        setFillterData(response.data);
      });
    }
    if (type == "author") {
      getAuthors().then((response) => {
        setCurrentFilter("author");
        setFillterData(response.data);
      });
    }
    if (type == "year") {
      getYears().then((response) => {
        setCurrentFilter("year");
        setFillterData(response.data);
      });
    }
  };

  return (
    <div className="flex flex-col gap-4 p-4 my-6 mt-16">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Buscar un Libro
        </h1>

        <div className="relative p-3 mt-4 border border-gray-300 rounded-lg w-full max-w-lg">
          <TextField
            type="text"
            value={localFilter.title}
            onChange={(e) => {
              setLocalFilter({ ...localFilter, title: e.target.value });
            }}
            onKeyDown={handleEnter}
            className="rounded-md p-3 w-full"
            variant="standard"
            placeholder="Buscar por Titulo"
            slotProps={{
              input: {
                disableUnderline: true,
              },
            }}
          />

          <IconButton className="absolute right-6 top-4" onClick={handleFilter}>
            <SearchIcon className="text-[30px]" />
          </IconButton>
        </div>
      </div>
      <div className="relative flex items-center flex-col mt-6">
        <div className="flex justify-center gap-8">
          <div className="relative">
            {localFilter.genre !== "" && (
              <button
                onClick={() => {
                  setLocalFilter((prev) => ({ ...prev, genre: "" }));
                }}
                className="absolute right-[90px] top-[-25px] w-7 h-7 flex items-center justify-center rounded-full bg-red-500 text-white font-bold transition-transform hover:scale-110"
              >
                X
              </button>
            )}
            <Button
              variant="contained"
              onClick={() => {
                handleOpen("genre");
              }}
              className={`rounded-full bg-black w-[100px]  ${
                localFilter.genre == ""
                  ? "hover:translate-y-[-5px] hover:translate-x-[5px]"
                  : ""
              } transition-transform ${
                localFilter.genre !== ""
                  ? "translate-y-[-28px] translate-x-[12px]"
                  : ""
              }`}
            >
              Genero
            </Button>
            <div
              className={`absolute inset-0 border-2 border-black rounded-full -z-10 text-center pt-2`}
            >
              {localFilter.genre !== "" ? localFilter.genre : ""}
            </div>
          </div>
          <div className="relative">
            {localFilter.author !== "" && (
              <button
                onClick={() => {
                  setLocalFilter((prev) => ({ ...prev, author: "" }));
                }}
                className="absolute right-[90px] top-[-25px] w-7 h-7 flex items-center justify-center rounded-full bg-red-500 text-white font-bold transition-transform hover:scale-110"
              >
                X
              </button>
            )}
            <Button
              variant="contained"
              onClick={() => {
                handleOpen("author");
              }}
              className={`rounded-full bg-black w-[100px] ${
                localFilter.author == ""
                  ? "hover:translate-y-[-5px] hover:translate-x-[5px]"
                  : ""
              } transition-transform ${
                localFilter.author !== ""
                  ? "translate-y-[-28px] translate-x-[12px]"
                  : ""
              }`}
            >
              Autor
            </Button>
            <div
              className={`absolute inset-0 border-2 border-black rounded-full -z-10 text-center pt-2 ${
                localFilter.author && localFilter.author.length > 10
                  ? "text-sm"
                  : "text-base"
              }`}
            >
              {localFilter.author
                ? localFilter.author.length > 10
                  ? `${localFilter.author.slice(0, 10)}...`
                  : localFilter.author
                : ""}
            </div>
          </div>
          <div className="relative">
            {localFilter.year !== 0 && (
              <button
                onClick={() => {
                  setLocalFilter((prev) => ({ ...prev, year: 0 }));
                }}
                className="absolute right-[90px] top-[-25px] w-7 h-7 flex items-center justify-center rounded-full bg-red-500 text-white font-bold transition-transform hover:scale-110"
              >
                X
              </button>
            )}
            <Button
              variant="contained"
              onClick={() => {
                handleOpen("year");
              }}
              className={`rounded-full bg-black w-[100px] ${
                localFilter.year == 0
                  ? "hover:translate-y-[-5px] hover:translate-x-[5px]"
                  : ""
              } transition-transform ${
                localFilter.year !== 0
                  ? "translate-y-[-28px] translate-x-[12px]"
                  : ""
              }`}
            >
              Año
            </Button>
            <div className="absolute inset-0 border-2 border-black rounded-full -z-10 text-center pt-2">
              {localFilter.year !== 0 ? localFilter.year : 0}
            </div>
          </div>
        </div>
        {isOpen && (
          <ClickAwayListener onClickAway={() => setIsOpen(false)}>
            <div className="absolute top-10 flex flex-col items-start p-2 w-[400px] bg-slate-100 mt-3 rounded-lg border border-black z-50">
              {filterData?.map((item, index) => (
                <div
                  key={index}
                  className="flex w-full hover:bg-slate-300 cursor-pointer rounded-lg pl-4 py-2"
                  onClick={() => {
                    setLocalFilter((prevFilter) => ({
                      ...prevFilter,
                      genre:
                        currentFilter === "genre" ? item : prevFilter.genre,
                      author:
                        currentFilter === "author" ? item : prevFilter.author,
                      year:
                        currentFilter === "year"
                          ? Number(item)
                          : prevFilter.year,
                    }));
                    setIsOpen(false)
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </ClickAwayListener>
        )}
      </div>
    </div>
  );
};

export default Search;
