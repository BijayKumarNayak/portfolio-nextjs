"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import Link from "next/link";
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-5 inset-x-0 max-w-2xl mx-auto z-50", className)} >
      <Menu setActive={setActive}>
        <Link href="#home">
          <MenuItem setActive={setActive} active={active} item="Home">
          </MenuItem>
        </Link>
        <Link href="#about">
          <MenuItem setActive={setActive} active={active} item="About">
          </MenuItem>
        </Link>
        <Link href="#skill">
          <MenuItem setActive={setActive} active={active} item="Skill">
          </MenuItem>
        </Link>
        <Link href="#project">
          <MenuItem setActive={setActive} active={active} item="Project">
          </MenuItem>
        </Link>
        <Link href="#contact">
          <MenuItem setActive={setActive} active={active} item="Contact">
          </MenuItem>
        </Link>
      </Menu>
    </div>
  )
}

export default Navbar

