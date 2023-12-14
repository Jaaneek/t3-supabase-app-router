"use client";

import { type PropsWithChildren } from "react";
import { withPrivateRoute } from "~/providers/AuthProvider/withPrivateRoute";

const PrivateRouteBaseComponent = ({ children }: PropsWithChildren) => children;

export const PrivateRouteBase = withPrivateRoute(PrivateRouteBaseComponent);
