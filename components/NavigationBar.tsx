import { useRouter } from "next/dist/client/router";
import React from "react";
import {
  LogoutDocument,
  useLogoutMutation,
  useMeQuery,
} from "../generated/graphql";
import { DropdownMenu } from "./DropdownMenu";

export const NavigationBar = () => {
  const [{ data, error, fetching }] = useMeQuery();
  const router = useRouter();
  let body = null;
  if (fetching) {
    body = null;
  } else if (!data?.me) {
    body = (
      <>
        <button
          type="button"
          className="inline-flex mr-4 justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => {
            router.push("/login");
          }}
        >
          Login
        </button>
        <button
          type="button"
          className="inline-flex mr-4 justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => {
            router.push("/register");
          }}
        >
          Register
        </button>
      </>
    );
  } else {
    body = <DropdownMenu me={data?.me.username} />;
  }
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700"
        rel="stylesheet"
      />
      <nav
        id="header"
        className="fixed w-full z-30 top-0 text-white bg-gray-400"
      >
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
          <div className="pl-4 flex items-center">
            <a
              className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="/"
            >
              Remindy
            </a>
          </div>
          <div className="block lg:hidden pr-4">
            <button
              id="nav-toggle"
              className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
              <svg
                className="fill-current h-6 w-6"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className="w-full flex-grow lg:items-center lg:w-auto hidden mt-2 list-reset lg:flex justify-end flex-1 items-center lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
            id="nav-content"
          >
            {body}
          </div>
        </div>
      </nav>
    </>
  );
};
