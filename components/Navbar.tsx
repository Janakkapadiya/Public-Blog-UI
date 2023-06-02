"use client";

import { unsetToken } from "@/lib/auth";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isLogged, setIsLogged] = useState(false);

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
    <nav className="container mx-auto px-0 md:px-auto md:mx-auto flex items-center justify-between py-10 md:py-6">
      <Link href="/">
        <div className="flex items-center cur">
          <Image
            className="align-middle text-center table-cell"
            width={40}
            height={45}
            src="/icons8-petabyte-128.png"
            alt="Daily Blog"
          />
        </div>
      </Link>
      <ul className="flex items-center">
        {isLogged && (
          <li className="mr-6 font-medium text-gray-600">
            <Link
              className="bg-primary py-2 px-4 rounded-sm text-white hover:bg-gray-600 transition-all"
              href="/profile"
            >
              Profile
            </Link>
          </li>
        )}
        {isLogged && (
          <li className="mr-6 font-medium text-gray-600">
            <a
              className="bg-primary py-2 px-4 rounded-sm text-white hover:bg-gray-600 cursor-pointer transition-all pl-5"
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
