"use client";

import React, { useEffect } from "react";

import { useRouter } from "next/navigation";
import { LoadingScreen } from "../Loading";
import { useUser } from "~/providers/AuthProvider/AuthProvider";

export const withPublicRoute = <T extends object>(
  WrappedComponent: React.FunctionComponent<T>
) => {
  const ComponentwithPublicRoute = (props: T) => {
    const router = useRouter();
    const { user, isLoading } = useUser();
    const isUserDataLoaded = !isLoading;

    useEffect(() => {
      if (user && isUserDataLoaded) {
        router.push("/dashboard");
      }
    }, [user, isUserDataLoaded, router]);

    if (user || !isUserDataLoaded) return <LoadingScreen />;

    return <WrappedComponent {...props} />;
  };

  return ComponentwithPublicRoute;
};
