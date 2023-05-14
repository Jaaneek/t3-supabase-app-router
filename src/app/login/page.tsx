"use client";
import { env } from "~/env.mjs";
import { clientSupabase } from "~/server/supabase/supabaseClient";

const testAccounts = [
  { email: "random@gmail.com", password: "testPassword" },
  { email: "testq2@op.pl", password: "!fewfwe123" },
];

const Page = () => {
  return (
    <div>
      {env.NEXT_PUBLIC_SELF_HOSTING === "1" && (
        <div>
          {testAccounts.map((account, index) => (
            <div key={index}>
              <button
                onClick={() => {
                  void clientSupabase.auth.signInWithPassword(account);
                }}
              >
                Login {account.email}
              </button>
              <button
                onClick={() => {
                  void clientSupabase.auth.signUp(account);
                }}
              >
                Register {account.email}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
