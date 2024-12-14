"use client";

import { useState } from "react";
import { Input } from "./input";
import { useRouter } from "next/navigation";
import { Button } from "./button";

const Search = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      router.push(`/search/${search}`);
    }
  };
  return (
    <div className="relative">
      <Input
        type="search"
        className="pl-4 pr-8 border-0 rounded-full bg-slate-200"
        placeholder="Cari Berita"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleEnter}
      />
      <Button
        size={"icon"}
        className="cursor-pointer"
        asChild
        onClick={() => router.push(`/search/${search}`)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={23}
          height={23}
          color={"#000000"}
          fill={"none"}
          className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
        >
          <path
            d="M17.5 17.5L22 22"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </Button>
    </div>
  );
};

export default Search;
