"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function Header() {
  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, []);
  return (
    <div className="flex p-4 items-center justify-between bg-secondary shadow-sm">
      <Image src={"/logo.png"} alt="logo" width={160} height={100} />
      <ul className="hidden md:flex gap-6">
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer
        ${path == '/dashboard' && "text-primary font-bold"}
        `}
        >
          Dashboard
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer
        ${path == '/dashboard/faqs' && "text-primary font-bold"}
        `}
        >
          FAQs
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer
        ${path == '/dashboard/about'  && "text-primary font-bold"}
        `}
        >
          About us
        </li>
      </ul>
      <UserButton />
    </div>
  );
}
