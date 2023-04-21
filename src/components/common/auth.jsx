import { useAuth } from "@/hook";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export function Auth({ children }) {
  const router = useRouter();
  const { profile, firstLoading } = useAuth();

  useEffect(() => {
    if (!firstLoading && !profile?.username) router.push("/login");
  }, [profile, router, firstLoading]);
  if (!profile?.username) return <div>Loading ...</div>;
  return <>{children}</>;
}
