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
import { useForm } from "react-hook-form"; 
import { signup } from "@/libs/Login/AuthRequest";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    signup(data).then((response) => {
      if (response.success) {
        toast.success(response.message);

        router.push("/login");
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
            Registrate
          </Typography>
        }
        className="pb-2"
      />
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <TextField
            fullWidth
            label="username"
            type="string"
            variant="outlined"
            {...register("username", {
              required: "El Nombre de usuario es requerido",
              minLength: {
                value: 3,
                message:
                  "El Nombre de usuario debe tener al menos 3 caracteres",
              },
            })}
            error={!!errors.username}
            helperText={String(errors.username?.message ?? "")}
          />

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
            error={!!errors.email}
            helperText={String(errors.email?.message ?? "")}
          />

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
            helperText={String(errors.password?.message ?? "")}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            color="primary"
          >
            Registrarme
          </Button>
          <Divider />
          <Typography
            variant="body2"
            align="center"
            className="mt-2 text-gray-600"
          >
            ya tienes una cuenta?{" "}
            <span
              onClick={() => {
                router.push("/login");
              }}
              className="text-sky-700 hover:underline cursor-pointer"
            >
              Login
            </span>
          </Typography>
        </form>
      </CardContent>
    </Card>
  );
};

export default Login;
