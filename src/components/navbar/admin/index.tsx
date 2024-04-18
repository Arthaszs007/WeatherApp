"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const Admin = () => {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <div>
          <button
            onClick={() => {
              signOut();
            }}
            className="mr-3 hover:bg-white active:bg-slate-50 "
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={() => {
              signIn();
            }}
            className="mr-3 hover:bg-white active:bg-slate-50 "
          >
            Login
          </button>
        </div>
      )}
    </>
  );
};

export default Admin;
