import React from "react";
import { Auth } from "../common";

export function AdminLayout({ children }) {
  return (
    <Auth>
      AdminLayout
      {children}
    </Auth>
  );
}
