"use client";

import { env } from "~/env.mjs";
import { supabase } from "~/server/supabase/supabaseClient";

const testAccounts = [
  { email: "account1@gmail.com", password: "testPassword1" },
  { email: "account2@gmail.com", password: "testPassword2" },
];

const Page = () => {
  return (
    <div>
      {env.NODE_ENV === "development" && (
        <div>
          {testAccounts.map((account, index) => (
            <div key={index}>
              <button
                onClick={() => {
                  void supabase().auth.signInWithPassword(account);
                }}
              >
                Login {account.email}
              </button>
              <button
                onClick={() => {
                  void supabase().auth.signUp(account);
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
