"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useUser } from "~/providers/AuthProvider/AuthProvider";

export const withPrivateRoute = <T extends object>(
  WrappedComponent: React.FunctionComponent<T>,
) => {
  const ComponentWithPrivateRoute = (props: T) => {
    const router = useRouter();

    const { user, isLoading } = useUser();

    useEffect(() => {
      if (!user && !isLoading) {
        router.push("/login");
      }
    }, [user, router, isLoading]);

    if (!user) return null;

    return <WrappedComponent {...props} />;
  };

  return ComponentWithPrivateRoute;
};
