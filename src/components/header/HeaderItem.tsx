"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function HeaderItem({ title, href }: { title: string; href: string }) {
  const path = usePathname();

  return (
    <Link href={href}>
      <span
        className={`${
          path === href ? "text-blue-600  font-bold" : "text-neutral-300"
        }  hover:text-white cursor-pointer`}
      >
        {title}
      </span>
    </Link>
  );
}

export default HeaderItem;
