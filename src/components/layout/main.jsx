import Link from "next/link";
import React from "react";

export function MainLayout({ children }) {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/login">Login</Link>
      {children}
    </div>
  );
}
