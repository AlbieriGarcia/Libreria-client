"use client";

import { Button, TextField, Box, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { insertBook, updateBook } from "@/libs/Books/BooksRequest";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Book } from "@/types/bookTypes";
import { useEffect } from "react";

const BookForm = ({ type, data }: { type: string; data?: Book }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      descripcion: "",
      author: "",
      year: "",
      genre: "",
      coverImage: "",
      _id: "",
      favorite: {
        _id: "",
        isFavorite: false,
        bookId: "",
      },
    },
  });

  const router = useRouter();

  useEffect(() => {
    if (data) {
      reset({
        _id: data._id,
        title: data.title,
        descripcion: data.descripcion,
        author: data.author,
        year: String(data.year),
        genre: data.genre[0],
        coverImage: data.coverImage,
        favorite: {
          _id: data.favorite?._id,
          isFavorite: data.favorite?.isFavorite,
          bookId: data.favorite?.bookId,
        },
      });
    }
  }, [data, reset]);

  const onSubmit = (data: any) => {
    if (!data) {
      insertBook(data).then((response) => {
        if (response.success) {
          toast.success(response.message);

          router.push("/my-books");
        } else {
          toast.error(response.message);
        }
      });
    } else {
      updateBook(data).then((response) => {
        if (response.success) {
          toast.success(response.message);

          router.push("/my-books");
        } else {
          toast.error(response.message);
        }
      });
    }

    reset();
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f4f4f4"
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          backgroundColor: "white",
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          width: "100%",
          maxWidth: 400,
        }}
      >
        <Typography variant="h5" gutterBottom>
          {type === "add" ? "Agregar Libro" : "Editar Libro"}
        </Typography>

        <TextField
          label="Título"
          fullWidth
          margin="normal"
          slotProps={{ inputLabel: { shrink: true } }}
          {...register("title", { required: "Este campo es obligatorio" })}
          error={!!errors.title}
          helperText={String(errors.title?.message ?? "")}
        />

        <TextField
          label="Descripción"
          fullWidth
          margin="normal"
          slotProps={{ inputLabel: { shrink: true } }}
          {...register("descripcion", {
            required: "Este campo es obligatorio",
          })}
          error={!!errors.descripcion}
          helperText={String(errors.descripcion?.message ?? "")}
        />

        <TextField
          label="Autor"
          fullWidth
          margin="normal"
          slotProps={{ inputLabel: { shrink: true } }}
          {...register("author", { required: "Este campo es obligatorio" })}
          error={!!errors.author}
          helperText={String(errors.author?.message ?? "")}
        />

        <TextField
          label="Año"
          fullWidth
          margin="normal"
          inputProps={{ min: 1 }}
          type="number"
          slotProps={{ inputLabel: { shrink: true } }}
          {...register("year", { required: "Este campo es obligatorio" })}
          error={!!errors.year}
          helperText={String(errors.year?.message ?? "")}
        />

        <TextField
          label="Género"
          fullWidth
          margin="normal"
          slotProps={{ inputLabel: { shrink: true } }}
          {...register("genre", { required: "Este campo es obligatorio" })}
          error={!!errors.genre}
          helperText={String(errors.genre?.message ?? "")}
        />

        <TextField
          label="Imagen de portada"
          fullWidth
          margin="normal"
          slotProps={{ inputLabel: { shrink: true } }}
          {...register("coverImage", { required: "Este campo es obligatorio" })}
          error={!!errors.coverImage}
          helperText={String(errors.coverImage?.message ?? "")}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          className="bg-black"
          sx={{ marginTop: 2 }}
        >
          {type === "add" ? "Agregar Libro" : "Actualizar Libro"}
        </Button>
      </Box>
    </Box>
  );
};

export default BookForm;
