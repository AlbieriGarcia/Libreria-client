"use client";

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";  // Importa react-hook-form
import { signin } from "@/libs/Login/AuthRequest";
import toast, { Toaster } from 'react-hot-toast';
import router from "next/router";


const Login = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  
  const onSubmit = (data: any) => {
    signin(data).then((response) => {
      console.log(response);
      
      if(response.success){
        toast.success(response.message);

        router.push("/");
      } else {
        toast.error(response.message);
      }
    });
  };

  return (
    <Card className="max-w-md mx-auto mt-10 p-6 shadow-lg">
      <CardHeader
        title={
          <Typography variant="h5" component="h1" align="center">
            Has Login para Continuar
          </Typography>
        }
        className="pb-2"
      />
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Campo de Email */}
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            {...register("email", {
              required: "El email es obligatorio",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "El email no es válido",
              },
            })}
            error={!!errors.email}  // Muestra error si el campo email tiene errores
            helperText={String(errors.email?.message ?? '')}  // Muestra el mensaje de error
          />

          {/* Campo de Password */}
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            {...register("password", {
              required: "La contraseña es obligatoria",
              minLength: {
                value: 6,
                message: "La contraseña debe tener al menos 6 caracteres",
              },
            })}
            error={!!errors.password}  
            helperText={String(errors.password?.message ?? '')}  
          />

          {/* Botón de enviar */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            color="primary"
          >
            Continuar
          </Button>
          <Divider />
          <Typography
            variant="body2"
            align="center"
            className="mt-2 text-gray-600"
          >
            No tienes una cuenta?{" "}
            <span
              onClick={() => {
                console.log("Redirect to sign up");
              }}
              className="text-sky-700 hover:underline cursor-pointer"
            >
              Registrarme
            </span>
          </Typography>
        </form>
      </CardContent>
    </Card>
  );
};

export default Login;
