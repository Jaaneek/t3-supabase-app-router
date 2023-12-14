import { cache } from "react";
import { cookies } from "next/headers";
import { supabase } from "~/server/supabase/supabaseClient";

export const getServerUser = cache(async () => {
  const ckies = cookies();
  const mappedCookies = new Map(ckies);
  const accessToken = mappedCookies.get("access-token")?.value;
  const refreshToken = mappedCookies.get("refresh-token")?.value;

  if (!accessToken || !refreshToken) {
    return {
      user: null,
      session: null,
    };
  }

  const { error, data } = await supabase().auth.setSession({
    access_token: accessToken,
    refresh_token: refreshToken,
  });

  if (error) {
    return {
      user: null,
      session: null,
    };
  }

  return data;
});
