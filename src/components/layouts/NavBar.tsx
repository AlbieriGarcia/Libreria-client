"use client";

import { Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

import { signout } from "@/libs/Login/AuthRequest";
import Link from "next/link";

const NavBar = () => {
  const router = useRouter();

  const handleLogOut = () => {
    signout().then((response) => {
      if (response.success) {
        router.push("/login");
      }
    });
  };

  return (
    <div className="flex justify-between mx-12 my-6">
      <div>
        <Link href="/home">
          <Typography variant="h4" className="text-black">
            Libreria
          </Typography>
        </Link>
      </div>

      <div className="flex items-center">
        <div className="relative">
          <Button
            variant="contained"
            className="rounded-full bg-black hover:translate-y-[-5px] hover:translate-x-[5px] transition-transform"
            onClick={handleLogOut}
          >
            Log Out
          </Button>
          <div className="absolute inset-0 border-2 border-black rounded-full -z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;