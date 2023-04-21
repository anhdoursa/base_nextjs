import React from "react";
import { Header } from "../common";

export function MainLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
