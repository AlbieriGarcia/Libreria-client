import { Close } from "@mui/icons-material";
import { Button, Card, Modal, TextField, Typography } from "@mui/material";
import StarComponent from "./StarComponent";
import { useForm } from "react-hook-form";
import { useState } from "react";

const InsertReview = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [star, setStars] = useState(0)

  const handleStarSelect = (starNumber: number) => {
    setStars(starNumber);
  };

  const onSubmit = (data: any) => {
   /*  const params = {
      bookId: '',
      rating: star,
      comment: data.comment,
    }
    insertReview(params).then(response => {
      if(response)
    }) */
    
  };

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="flex w-full h-full justify-center items-center">
      <div className="relative w-full max-w-[800px] h-[600px] md:w-[700px] sm:w-[400px] xs:w-[320px] flex justify-center items-center">
          <div
            className="absolute cursor-pointer bg-black rounded-2xl text-white h-[40px] w-[40px] flex justify-center items-center top-[-10px] right-[-10px] hover:scale-105"
            onClick={handleClose}
          >
            <Close className="text-[27px] font-bold transform hover:text-[23px]" />
          </div>
          <Card className="flex justify-center w-full h-full rounded-2xl p-8">
            <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
              <Typography variant="h4" component="h3">
                Review
              </Typography>
              <div className="flex justify-center items-center w-[600px] h-[80px]">
                <StarComponent startSelected={handleStarSelect} />
              </div>
              <Typography variant="h5" component="h3" className="mt-4">
                {"Pelicula"}
              </Typography>
              <div className="mx-4">
                <TextField
                  fullWidth
                  margin="normal"
                  multiline
                  rows={8}
                  {...register("comment", {
                    required: "Este campo es obligatorio",
                  })}
                  error={!!errors.comment}
                  helperText={String(errors.comment?.message ?? "")}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className="bg-black mt-4 w-[200px] rounded-full"
                >
                  Enviar
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </Modal>
  );
};

export default InsertReview;
