import Link from "next/link";
import React from "react";

export function Header() {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/login">Login</Link>
      <Link href="/admin">Admin</Link>
    </div>
  );
}
