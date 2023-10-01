"use client";
import { useAuth } from "@/app/lib/auth";
import { NavbarItem, Link, Button, Avatar, Image } from "@nextui-org/react";

export default function NavbarRight() {
  const { status, user } = useAuth();

  if (status === "initial" || status === "loading") {
    return null;
  }

  return (
    <NavbarItem>
      {status === "autorized" && user ? (
        // user.coin
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Image
            src="/images/coin.svg"
            alt="coin"
            width={20}
            height={20}
            radius={"none"}
          />
          <h3>{user.coin}</h3>
          <Avatar
            src={user?.picture_url || undefined}
            size="md"
            name={user?.name ?? undefined}
          />
        </div>
      ) : (
        <Button as={Link} color="primary" href="/register" variant="flat">
          Sign in
        </Button>
      )}
    </NavbarItem>
  );
}
