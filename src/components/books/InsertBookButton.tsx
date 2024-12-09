import { Button } from "@mui/material"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"


const InsertBookButton = () => {
    const router = useRouter();

    const handleOpenForm = () => {
        router.push('/add')
    }
    
    return(

          <Button
            variant="contained"
            className="rounded-2xl bg-black h-12"
            onClick={handleOpenForm}
          >
            Agregar Libro
          </Button>

    )
}

export default InsertBookButton