import Login from "@/components/auth/Login";
import { Toaster } from "react-hot-toast";

export default function LoginPage() {
  return (
    <div className="h-full flex items-center justify-center bg-[#5c3B58]">
      <div className="md:h-auto md:w-[420px]">
        <Toaster />
        <Login></Login>
      </div>
    </div>
  );
}
