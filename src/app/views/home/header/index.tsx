import React from "react";
import Link from "next/link";
import { Menu } from "@headlessui/react";
import MyDropdown from "@/app/components/Dropdown";

export default function Header() {
  return (
    <header className="bg-slate-400 max-w-full border-b-2 border-b-red-950 flex items-center justify-between py-4 px-2">
      <Link href={`/`} className="font-medium text-2xl text-indigo-700">
        Estore
      </Link>
      <MyDropdown />
      <Link
        href={`/regeter`}
        className=" font-medium bg-teal-600 py-2 px-4 rounded-md text-white hover:bg-black"
      >
        Login
      </Link>
    </header>
  );
}
