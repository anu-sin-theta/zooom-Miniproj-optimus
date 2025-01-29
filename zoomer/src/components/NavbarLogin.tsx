"use client"

"use client";
import React, { useEffect, useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "../../lib/utils";
import SliderToggle from "./SliderToggle";
import Link from "next/link";
// import Link from "next/link";


function NavbarLogin({ className }: { className?: string }) {

    const [active, setActive] = useState<string | null>(null);
    const [selected, setSelected] = useState("light");
  
  useEffect(() => {
      const savedTheme = localStorage.getItem('theme') || 'light';
      setSelected(savedTheme);
      document.body.className = savedTheme + '-mode';
    }, [])

    
    
        useEffect(() => {
        document.body.className = selected;
      }, [selected]);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="About">
        </MenuItem>
        
        {/* <Link href="/dashboard">
        
        <MenuItem setActive={setActive} active={active} item="Dashboard">
        </MenuItem>
        </Link> */}

        <MenuItem setActive={setActive} active={active} item="Profile">
        </MenuItem>
        <Link href="/">
        
        <MenuItem setActive={setActive} active={active} item="Logout">
        </MenuItem>
        </Link>
        
        <SliderToggle selected={selected} setSelected={setSelected} />
      </Menu>
    </div>
  );
}

export default NavbarLogin;