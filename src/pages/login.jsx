import { authApi } from "@/api-client";
import React from "react";

export default function LoginPage() {
  const handleLogin = async () => {
    try {
      authApi.login({
        username: "test",
        password: "test123",
      });
    } catch (err) {
      console.log("login error", err);
    }
  };
  const handleGetProfile = async () => {
    try {
      authApi.getProfile();
    } catch (err) {
      console.log("get profile error", err);
    }
  };
  const handleLogout = async () => {
    try {
      authApi.logout();
    } catch (err) {
      console.log("logout error", err);
    }
  };
  return (
    <div>
      <h1>LoginPage</h1>
      <div>Profile:</div>
      <div>
        <button onClick={handleLogin}>Login</button>
      </div>
      <div>
        <button onClick={handleGetProfile}>Get Profile</button>
      </div>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}
