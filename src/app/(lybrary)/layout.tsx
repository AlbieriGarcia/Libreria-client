import Navbar from "@/components/layouts/NavBar";

export default function NavBarLayout ({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
        </div>
    );
};

