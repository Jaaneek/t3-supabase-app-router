"use client";

import { useRouter } from "next/navigation";
import { type ReactNode, useEffect } from "react";
import { useUser } from ".";

/**
 * A function that takes a component and returns a wrapped component that requires a user to be logged in to view.
 *
 * @param WrappedComponent The component to wrap.
 * @returns A wrapped component that requires a user to be logged in to view.
 */

const withPrivateRoute = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  WrappedComponent: React.FunctionComponent<any>
) => {
  const ComponentWithPrivateRoute = (props: { children: ReactNode }) => {
    const { user, isLoading } = useUser();
    const router = useRouter();
    const isUserDataLoaded = !isLoading;
    useEffect(() => {
      if (!user && isUserDataLoaded) {
        router.push("/login");
      }
    }, [user, isUserDataLoaded, router]);
    //@TODO: Replace with a loading component
    if (!user || !isUserDataLoaded) return <div>Loading...</div>;
    return <WrappedComponent {...props} />;
  };

  return ComponentWithPrivateRoute;
};

export default withPrivateRoute;
