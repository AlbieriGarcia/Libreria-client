'use client'

import InsertBookButton from "@/components/books/InsertBookButton";
import Search from "@/components/layouts/Search";
import {  usePathname } from "next/navigation";

export default function NavBarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const path = pathname?.split("/")[1];
  return (
    <div>
      <Search />
      {path == "my-books" ? (
        <div className="flex justify-center">
          <InsertBookButton />
        </div>
      ) : (
        ""
      )}
      <main>{children}</main>
    </div>
  );
}
