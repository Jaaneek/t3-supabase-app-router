"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useUser } from "~/providers/AuthProvider/AuthProvider";
import { api } from "~/utils/api";

export const withPrivateRoute = <T extends object>(
  WrappedComponent: React.FunctionComponent<T>,
) => {
  const ComponentWithPrivateRoute = (props: T) => {
    const router = useRouter();

    const { user, isLoading } = useUser();
    const { isLoading: isProfileLoading } = api.auth.getProfile.useQuery();
    const isUserDataLoaded = !isLoading && !isProfileLoading;
    useEffect(() => {
      if (!user && isUserDataLoaded) {
        router.push("/login");
      }
    }, [user, isUserDataLoaded, router]);

    // TODO: Add loading component
    if (!user || !isUserDataLoaded) return <p>Loading...</p>;
    return <WrappedComponent {...props} />;
  };

  return ComponentWithPrivateRoute;
};
