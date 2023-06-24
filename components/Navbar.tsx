"use client";

import { unsetToken } from "@/lib/auth";
//@ts-ignore
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const email = Cookies.get("email");
    const jwt = Cookies.get("jwt");

    setIsLogged(!!email && !!jwt);
  }, []);

  const logout = () => {
    unsetToken();
    setIsLogged(false);
    window.location.replace("/");
  };

  return (
    <nav className="flex items-center justify-between py-0 bg-gray-300 left-0 right-0 top-0">
      <Link href="/">
        <div className="flex ml-1 md:ml-4 sm:ml-4 items-center cursor-pointer">
          <Image
            className="align-middle text-center table-cell"
            width={90}
            height={100}
            src="/current.png"
            alt="Daily Blog"
          />
        </div>
      </Link>
      <button
        className="flex md:hidden items-center px-4 py-2 text-gray-600 focus:outline-none"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <ul
        className={`${
          isMobileMenuOpen ? "flex" : "hidden"
        } md:flex items-center md:ml-auto`}
      >
        {isLogged && (
          <li className="mr-6 font-medium text-gray-600">
            <Link
              href="/profile"
              className="bg-primary py-2 px-4 rounded-sm text-white hover:bg-gray-600 transition-all"
            >
              Profile
            </Link>
          </li>
        )}
        {isLogged && (
          <li className="mr-6 font-medium text-gray-600">
            <a
              className="bg-primary py-2 px-4 rounded-sm text-white hover:bg-gray-600 cursor-pointer transition-all"
              onClick={logout}
            >
              Logout
            </a>
          </li>
        )}
        {!isLogged && (
          <>
            <li className="mr-6 font-medium text-gray-600">
              <Link href="/login" className="hover:text-gray-400">
                Login
              </Link>
            </li>
            <li className="mr-6 font-medium text-gray-600">
              <Link
                href="/signup"
                className="bg-primary py-2 px-4 rounded-sm text-white hover:bg-gray-600 transition-all"
              >
                SignUp
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
