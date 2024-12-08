import { Button } from "@mui/material";

const Search = () => {
  return (
    <div className="flex flex-col gap-4 p-4 my-6 mt-16">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Buscar un Libro
        </h1>

        <div className="relative p-3 mt-4 border border-gray-300 rounded-lg w-full max-w-lg">
          <input
            type="text"
            className="rounded-md p-3 w-full"
            placeholder="Buscar por Titulo | Genero | Autor"
          />

          <button type="submit" className="absolute right-6 top-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5" 
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-8">
        <div className="relative">
          <Button
            variant="contained"
            className="rounded-full bg-black w-[100px] hover:translate-y-[-5px] hover:translate-x-[5px] transition-transform"
          >
            Genero
          </Button>
          <div className="absolute inset-0 border-2 border-black rounded-full -z-10"></div>
        </div>
        <div className="relative">
          <Button
            variant="contained"
            className="rounded-full bg-black w-[100px] hover:translate-y-[-5px] hover:translate-x-[5px] transition-transform"
          >
            Autor
          </Button>
          <div className="absolute inset-0 border-2 border-black rounded-full -z-10"></div>
        </div>
        <div className="relative">
          <Button
            variant="contained"
            className="rounded-full bg-black w-[100px] hover:translate-y-[-5px] hover:translate-x-[5px] transition-transform"
          >
            Año
          </Button>
          <div className="absolute inset-0 border-2 border-black rounded-full -z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Search;
