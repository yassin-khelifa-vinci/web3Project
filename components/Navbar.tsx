
"use client";
import React from "react";
import { FloatingNav } from "../components/ui/floating-navbar";
import { IconHome, IconUser } from "@tabler/icons-react";
import { usePathname } from "next/navigation";

export default function FloatingNavDemo() {
  const pathname = usePathname();
  const path = pathname.split('/')[1];

  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Car Finder",
      link: `/${path}/cars`,
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    
  ];
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

