import { getExportCsvBook } from "@/libs/Books/BooksRequest";
import { Download } from "@mui/icons-material";
import { ClickAwayListener, Modal } from "@mui/material";
import { useState } from "react";

type filter = {
  title: string,
  genre: string,
  year: number,
  author: string,
}


const ExportCsv = ({filter, page, bookQt} : {filter: filter, page : number, bookQt: number}) => {
  const [open, setOpen] = useState(false);

  const handleExport = (getAll: boolean) => {
    const params = {
      getAll: getAll,
      filter: filter,
      bookQt: bookQt, 
      page: page,
    };

    getExportCsvBook(params);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        className="flex items-center justify-center cursor-pointer rounded-full bg-black h-[40px] w-[120px]"
        onClick={() => setOpen(true)}
      >
        <div>
          <img
            src="/excel-file-svgrepo-com.svg"
            alt="csv"
            className="w-[20px] text-white"
          />
        </div>
        <div className="text-white ml-2">Exportar</div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full backdrop-blur-sm">
          <ClickAwayListener onClickAway={() => setOpen(false)}>
            <div className="flex flex-col justify-center bg-white 2xl:w-[30%] lg:w-2/5  min-w-4/12  h-80 p-4 rounded-2xl">
              <h3 className="mb-6 text-center text-2xl font-extrabold">
                Exportar Libros en Archivo CSV <Download className="text-[30px]"/>
              </h3>
              <div className="flex justify-center w-full h-[80px] p-2 mb-4 rounded-2xl cursor-pointer bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" onClick={() => { handleExport(true) }}>
                <div className="w-full bg-slate-200 rounded-xl flex justify-center items-center font-bold">
                  Descargar Todos los libros
                </div>
              </div>
              <div className="flex justify-center w-full h-[80px] p-2 mb-4 rounded-2xl cursor-pointer bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" onClick={() => { handleExport(false) }}>
                <div className="w-full bg-slate-200 rounded-xl flex justify-center items-center font-bold">
                  Descargar libros de la pagina actual
                </div>
              </div>
            </div>
          </ClickAwayListener>
        </div>
      </Modal>
    </>
  );
};

export default ExportCsv;
