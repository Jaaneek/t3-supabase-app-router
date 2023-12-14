"use client";

import { type Provider } from "@supabase/supabase-js";
import { Icons } from "~/components/Icons";
import { Button } from "~/components/ui/button";
import { supabase } from "~/server/supabase/supabaseClient";
import { DevLoginButtons } from "../_components/DevLoginButtons";

const Page = () => {
  const signInWithOauth = (provider: Provider) => {
    void supabase().auth.signInWithOAuth({
      provider: provider,
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-3xl font-extrabold tracking-tight text-white">
            Login
          </h1>

          <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
            <Button
              variant="outline"
              className="flex flex-row gap-2"
              onClick={() => {
                signInWithOauth("google");
              }}
            >
              <Icons.google width={16} />
              Google
            </Button>
            <Button
              variant="outline"
              className="flex flex-row gap-2"
              onClick={() => {
                signInWithOauth("github");
              }}
            >
              <Icons.gitHub width={16} />
              Github
            </Button>
          </div>
        </div>
      </div>
      {process.env.NEXT_PUBLIC_VERCEL_ENV !== "production" && (
        <DevLoginButtons />
      )}
    </main>
  );
};

export default Page;
