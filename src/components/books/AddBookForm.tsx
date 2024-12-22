"use client";

import { Button, TextField, Box, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { insertBook } from "@/libs/Books/BooksRequest";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const AddBookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = (data: any) => {

    insertBook(data).then((response) => {
      if (response.success) {
        toast.success(response.message);

        router.push("/my-books");
      } else {
        toast.error(response.message);
      }
    });
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
          Agregar Libro
        </Typography>

        <TextField
          label="Título"
          fullWidth
          margin="normal"
          {...register("title", { required: "Este campo es obligatorio" })}
          error={!!errors.title}
          helperText={String(errors.title?.message ?? "")}
        />

        <TextField
          label="Descripción"
          fullWidth
          margin="normal"
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
          {...register("year", { required: "Este campo es obligatorio" })}
          error={!!errors.year}
          helperText={String(errors.year?.message ?? "")}
        />

        <TextField
          label="Género"
          fullWidth
          margin="normal"
          {...register("genre", { required: "Este campo es obligatorio" })}
          error={!!errors.genre}
          helperText={String(errors.genre?.message ?? "")}
        />

        <TextField
          label="Imagen de portada"
          fullWidth
          margin="normal"
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
          Agregar Libro
        </Button>
      </Box>
    </Box>
  );
};

export default AddBookForm;
