"use client";

import { supabase } from "~/server/supabase/supabaseClient";

const testAccounts = [
  { email: "random@gmail.com", password: "testPassword" },
  { email: "random2@gmail.com", password: "testPassword2" },
];

export const DevLoginButtons = () => {
  return (
    <div className="flex flex-col gap-2">
      {testAccounts.map((account, index) => (
        <div key={index} className="flex flex-col items-start text-white">
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
  );
};
