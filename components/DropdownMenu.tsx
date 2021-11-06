import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import { useLogoutMutation } from "../generated/graphql";

export const DropdownMenu = ({ me }) => {
  const [dropdown, setDropdown] = useState(false);
  const [, logout] = useLogoutMutation();
  const router = useRouter();
  let body = null;
  if (dropdown) {
    body = (
      <div
        className="`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg transition ease-${dropdown ? 'out' : 'in'} duration-${dropdown ? '100' : '75'} transform opacity-${dropdown ? '100' : '0'} scale-${dropdown ? '100' : '95'}`"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
      >
        <div className="py-1" role="none">
          <a
            href="#"
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            id="menu-item-0"
          >
            Account settings
          </a>
          <a
            href="#"
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            id="menu-item-1"
          >
            Support
          </a>
          <form method="POST" action="#" role="none">
            <button
              type="submit"
              className="text-gray-700 block w-full text-left px-4 py-2 text-sm"
              role="menuitem"
              id="menu-item-3"
              onClick={async () => {
                await logout();
                router.reload();
              }}
            >
              Sign out
            </button>
          </form>
        </div>
      </div>
    );
  }
  return (
    <div className="relative inline-block text-left mr-4">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => {
            setDropdown(!dropdown);
          }}
        >
          {me}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      {body}
    </div>
  );
};
