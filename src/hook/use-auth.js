import { authApi } from "@/api-client";
import useSWR from "swr";

export function useAuth(options) {
  const {
    data: profile,
    error,
    mutate,
  } = useSWR("/profile", {
    dedupingInterval: 60 * 60 * 1000, // 60 seconds
    revalidateOnFocus: false,
    ...options,
  });
  const firtLoading = profile === undefined && error === undefined;

  async function login(payload) {
    await authApi.login(payload);
    await mutate();
  }

  async function logout() {
    await authApi.logout();
    mutate({}, false);
  }

  return { profile, error, login, logout, firtLoading };
}
