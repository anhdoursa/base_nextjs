import { LoginForm } from "@/components/auth";
import { MainLayout } from "@/components/layout";
import { useAuth } from "@/hook";
import { Container } from "@mui/material";
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
    <Container>
      <LoginForm />
    </Container>
  );
}

LoginPage.Layout = MainLayout;
