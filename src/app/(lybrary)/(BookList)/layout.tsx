
import Search from "@/components/layouts/Search";

export default function NavBarLayout ({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Search />
            <main>{children}</main>
        </div>
    );
};

