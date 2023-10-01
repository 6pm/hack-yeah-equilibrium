"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import NavbarRight from "./NavbarRight";

const menuItems = [
  {
    name: "Home",
    url: "/",
    color: "primary", // "foreground"
  },
  {
    name: "Earn rewards",
    url: "/map",
    color: "primary", // "foreground"
  },
  {
    name: "Quizzles",
    url: "/quizzles",
    color: "primary",
  },
  {
    name: "Achievements",
    url: "/achievements",
    color: "primary",
  },
  {
    name: "News",
    url: "/news",
    color: "primary",
  },
  {
    name: "Log Out",
    color: "danger",
    action: () => {
      console.log("sign out");
      localStorage.clear();
      location.replace("/");
    },
  },
];

export default function HeaderNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link color="foreground" href="/">
            <Image
              src="/images/logo.svg"
              alt="Site logo"
              width={50}
              height={50}
              priority
            />
            <p className="font-bold text-inherit">Elections</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/" aria-current="page">
            Home
          </Link>
        </NavbarItem>

        <NavbarItem isActive>
          <Link href="/map">Earn rewards</Link>
        </NavbarItem>

        <NavbarItem>
          <Link href="/quizzles" aria-current="page">
            Quizzles
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/achievements">Achievements</Link>
        </NavbarItem>
      </NavbarContent>
      {/* ---- */}
      <NavbarContent justify="end">
        <NavbarRight />
      </NavbarContent>
      {/* ----- */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              // @ts-ignore
              color={item.color}
              className="w-full"
              href={item.url}
              size="lg"
              onClick={() => {
                item.action?.();
              }}
            >
              {item.name}
            </Link>
            {/* <button onClick={() => signOut()}>Sign out</Link> */}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
