import type { BooksDetail } from "@/types/bookTypes";
import { Avatar, Box, Rating, Typography } from "@mui/material";

const BookDetails = ({ params }: { params: BooksDetail }) => {
  console.log(params);
  return (
    <div className="p-4 max-w-screen-2xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="bg-slate-300 flex-shrink-0 w-full md:w-[400px] h-[550px]">
          <img
            src={params.bookDT.coverImage}
            alt={params.bookDT.title}
            className="rounded-md w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 bg-slate-100 p-6 rounded-md shadow-lg">
          <div className="font-extrabold text-3xl text-gray-800 mb-4">
            {params.bookDT.title}
          </div>

          <div className="text-lg text-gray-700 leading-relaxed">
            {params.bookDT.descripcion}
          </div>
        </div>

        <div>
          <div className="bg-slate-200 w-full md:w-[200px] h-[180px] rounded-md">
            <Box
              sx={{
                width: "100%",
                maxWidth: "200px",
                height: "180px",
                borderRadius: "8px",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Avatar
                alt="TODO si es que me da tiempo"
                src=""
                sx={{ width: 64, height: 64 }}
              />

              <Typography variant="h6" component="div" textAlign="center">
                {params.bookDT.userId.username}
              </Typography>

              <Typography
                variant="body2"
                color="textSecondary"
                textAlign="center"
              >
                {params.bookDT.userId.email}
              </Typography>

              <Rating
                name="user-rating"
                value={params.bookDT.rating}
                precision={0.5}
                readOnly
              />
            </Box>
          </div>
          <div className="mt-6 bg-slate-100 p-6 rounded-lg shadow-md">

            <div className="mb-4">
              <div className="font-semibold text-xl text-gray-700">Autor:</div>
              <div className="text-lg text-gray-600">
                {params.bookDT.author}
              </div>
            </div>

            <div className="mb-4">
              <div className="font-semibold text-xl text-gray-700">Año:</div>
              <div className="text-lg text-gray-600">
                {params.bookDT.year}
              </div>
            </div>

            <div className="font-semibold text-xl text-gray-700">Generos:</div>
            <div className="flex gap-3 flex-wrap pt-4">
              {params.bookDT.genre && params.bookDT.genre.length > 0 ? (
                params.bookDT.genre.map((genre, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 bg-white border border-black rounded-full text-sm text-gray-800 font-semibold"
                  >
                    {genre}
                  </div>
                ))
              ) : (
                <div className="text-gray-500">
                  No se especificaron géneros.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 rounded-lg">
        <Typography variant="h5" component="div" className="mb-3 font-bold">
          Comentarios
        </Typography>

        {params.reviews && params.reviews.length > 0 ? (
          params.reviews.map((review: any) => (
            <div
              key={review._id}
              className="flex items-start gap-4 p-4 bg-white border border-slate-300 rounded-lg shadow-md mb-4"
            >
              <Avatar
                alt={review.userId.username}
                src="/"
                className="w-14 h-14"
              />
              <div className="flex-1">
                <Typography variant="subtitle1" className="font-bold">
                  {review.userId.username}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {review.userId.email}
                </Typography>
                <Typography variant="body1" className="mt-2">
                  {review.comment}
                </Typography>
                <div className="flex items-center gap-2 mt-2">
                  <Rating
                    name="user-rating"
                    value={review.rating}
                    precision={0.5}
                    readOnly
                  />
                  <Typography variant="body2" color="textSecondary">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </Typography>
                </div>
              </div>

              {review.wasEdited && (
                <Typography
                  variant="body2"
                  className="text-blue-500 italic self-start"
                >
                  Editado
                </Typography>
              )}
            </div>
          ))
        ) : (
          <Typography variant="body1" color="textSecondary">
            Aun no hay comentarios.
          </Typography>
        )}
      </div>
    </div>
  );
};

export default BookDetails;
