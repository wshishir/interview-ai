import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export function Header() {
  return <div className="flex p-4 items-center justify-between bg-secondary shadow-sm">
    <Image src={'/logo.png'} alt="logo" width={160} height={100}/>
    <ul className="flex gap-6">
        <li>Dashboard</li>
        <li>FAQs</li>
        <li>About</li>
    </ul>
    <UserButton/>
  </div>;
}
