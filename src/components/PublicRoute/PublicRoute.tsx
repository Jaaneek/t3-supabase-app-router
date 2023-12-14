"use client";

import { withPublicRoute } from "~/providers/AuthProvider/withPublicRoute";

const PublicRouteComponent = ({ children }: { children: React.ReactNode }) =>
  children;

export const PublicRoute = withPublicRoute(PublicRouteComponent);
