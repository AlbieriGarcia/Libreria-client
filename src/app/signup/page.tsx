
import Signup from "@/components/auth/Signup";
import { Toaster } from "react-hot-toast";

export default function SignupPage() {
  return (
    <div className="h-full flex items-center justify-center bg-[#5c3B58]">
      <div className="md:h-auto md:w-[420px]">
        <Toaster />
        <Signup></Signup>
      </div>
    </div>
  );
}
