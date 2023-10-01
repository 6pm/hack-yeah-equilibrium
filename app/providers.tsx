"use client";
import { NextUIProvider } from "@nextui-org/react";
import {
  AuthProviderStateMemo,
  AuthStateType,
  initialAuthState,
} from "@/app/lib/auth";
import useFetchUser from "@/app/lib/auth/useFetchUser";
import { useEffect, useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [userData, setuserData] = useState<AuthStateType>(initialAuthState);

  const { loading, data, fetchWithAuth } = useFetchUser();

  // request data
  useEffect(() => {
    fetchWithAuth(`${process.env.BACKEND}/api/v1/users/current_user_info`);
    setuserData({
      user: null,
      status: "loading",
    });

    // load data once
  }, []);

  // handle response
  useEffect(() => {
    if (loading === false) {
      if (data) {
        setuserData({
          user: data,
          status: "autorized",
        });
      } else {
        setuserData({
          user: null,
          status: "not-autorized",
        });
      }
    }
  }, [loading, data]);

  return (
    <AuthProviderStateMemo state={userData}>
      <NextUIProvider className="flex min-h-screen flex-col items-center">
        {children}
      </NextUIProvider>
    </AuthProviderStateMemo>
  );
}
