import Navbar from "@/components/layouts/NavBar";
import Search from "@/components/layouts/Search";

export default function NavBarLayout ({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
        </div>
    );
};

