"use client";

import { ThemeProvider } from "next-themes";
import { AuthProvider } from "./AuthProvider/AuthProvider";
import {
  AnalyticsProvider,
  UmamiAnalyticsProvider,
} from "./AnalyticsProvider/AnalyticsProvider";
import { api } from "~/utils";
import React, { type PropsWithChildren } from "react";

function ProvidersBase({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
      <AnalyticsProvider />
      <UmamiAnalyticsProvider />
    </AuthProvider>
  );
}
export const Providers = api.withTRPC(
  ProvidersBase,
) as React.FC<PropsWithChildren>;
