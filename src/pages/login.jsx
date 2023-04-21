import { MainLayout } from "@/components/layout";
import { useAuth } from "@/hook";
import React from "react";

export default function LoginPage() {
  const { profile, login, logout } = useAuth({ revalidateOnMount: false });

  const handleLogin = async () => {
    try {
      login({ username: "admin", password: "123123" });
    } catch (err) {
      console.log("login error", err);
    }
  };

  const handleLogout = async () => {
    try {
      logout();
    } catch (err) {
      console.log("logout error", err);
    }
  };
  return (
    <div>
      <h1>LoginPage</h1>
      <div>Profile: {JSON.stringify(profile)}</div>
      <div>
        <button onClick={handleLogin}>Login</button>
      </div>

      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

LoginPage.Layout = MainLayout;
