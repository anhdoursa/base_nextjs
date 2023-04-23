import { LoginForm } from "@/components/auth";
import { MainLayout } from "@/components/layout";
import { useAuth } from "@/hook";
import { Container } from "@mui/material";
import React from "react";

export default function LoginPage() {
  const { profile, login, logout } = useAuth({ revalidateOnMount: false });

  const handleLoginSubmit = async (payload) => {
    try {
      console.log(payload);
      login(payload);
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
      <LoginForm handleLoginSubmit={handleLoginSubmit} />
    </Container>
  );
}

LoginPage.Layout = MainLayout;
