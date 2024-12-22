import { Button } from "@mui/material"
import { useEffect } from "react"


const FilterButton = ({filterType, handleOpen, isOpen}: {filterType: string, handleOpen: () => void, isOpen: boolean}) => {

    useEffect(() => {
        if(isOpen){
            if(filterType == "genre"){
                
            }
        }
    }, [filterType])
    
    return(
        <div className="relative">
          <Button
            variant="contained"
            onClick={handleOpen}
            className="rounded-full bg-black w-[100px] hover:translate-y-[-5px] hover:translate-x-[5px] transition-transform"
          >
            {filterType}
          </Button>
          <div className="absolute inset-0 border-2 border-black rounded-full -z-10"></div>
        </div>
    )
}

export default FilterButton