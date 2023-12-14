"use client";

import { ThemeProvider } from "next-themes";
import {
  AnalyticsProvider,
  UmamiAnalyticsProvider,
} from "./AnalyticsProvider/AnalyticsProvider";
import React, { type PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <ThemeProvider attribute="class" forcedTheme="light">
        {children}
      </ThemeProvider>
      <AnalyticsProvider />
      <UmamiAnalyticsProvider />
    </>
  );
}
