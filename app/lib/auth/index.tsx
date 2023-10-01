"use client";
import type { ReactNode } from "react";
import { createContext, memo, useContext } from "react";

export type AuthStateType = {
  status: "initial" | "loading" | "autorized" | "not-autorized";
  user: Record<string, string> | null;
  setuserData?: Function;
};

export const initialAuthState: AuthStateType = {
  status: "initial",
  user: null,
  setuserData: Function,
};

const AuthStateContext = createContext(initialAuthState);
AuthStateContext.displayName = "AuthStateContext";

type Props = {
  children: ReactNode;
  state: AuthStateType;
};

function AuthProviderState(props: Props) {
  const { children, state } = props;

  return (
    <AuthStateContext.Provider value={state}>
      {children}
    </AuthStateContext.Provider>
  );
}

export const AuthProviderStateMemo = memo(AuthProviderState);

export function useAuth() {
  const userState = useContext(AuthStateContext);

  if (userState === undefined) {
    throw new Error("useAuth must be used within a AuthProviderStateMemo");
  }

  return userState;
}
