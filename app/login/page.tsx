"use client";

import { fetchData } from "@/http";
import { setToken } from "@/lib/auth";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

function Signin() {
  const [error, setError] = useState("");
  const [data, setData] = useState({
    identifier: "",
    password: "",
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get("/login");

  const handleChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = async (e: any) => {
    try {
      e.preventDefault();

      const loginApi = await fetchData(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/local`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            identifier: data.identifier,
            password: data.password,
          }),
        }
      );
      await setToken(loginApi);
      window.location.replace("/");
    } catch (e) {
      setError("user not found");
    }
  };

  return (
    <div className="top-5 py-8 left-0 h-full w-full bg-white overflow-hidden">
      <form
        onSubmit={(e) => handleOnSubmit(e)}
        className="flex justify-center items-center h-full"
      >
        <div className="bg-white p-8 rounded shadow-md w-full sm:max-w-md">
          <h1 className="mb-8 text-3xl text-center">Login</h1>

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4 text-sm"
            name="identifier"
            required
            onChange={handleChange}
            placeholder="Email"
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            required
            onChange={handleChange}
            placeholder="Password"
            autoComplete="off"
          />
          {error ? (
            <div className="text-red-500 flex justify-center">{error}</div>
          ) : (
            " "
          )}
          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-gray-800 text-white hover:bg-gray-600 focus:outline-none my-1"
          >
            Login
          </button>
          <div className="flex items-center mt-4">
            <hr className="flex-grow border-gray-400" />
            <span className="mx-4 text-gray-500">or</span>
            <hr className="flex-grow border-gray-400" />
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="button"
              className="btn btn-link btn-floating-mx-1"
              onClick={() => {
                signIn("google"), callbackUrl;
              }}
            >
              <Image
                height={35}
                width={35}
                src="/icons8-google-144.png"
                alt="Google Logo"
              />
            </button>
            <button
              type="button"
              className="btn btn-link btn-floating-mx-1 ml-5"
              onClick={() => {
                signIn("github"), callbackUrl;
              }}
            >
              <Image
                height={33}
                width={33}
                src="/github-mark.png"
                alt="GitHub Logo"
              />
            </button>
          </div>
          <div className="text-grey-dark mt-6 justify-center text-center">
            Do not have an account? &nbsp;
            <Link
              className="no-underline border-b border-blue text-blue"
              href="/signup"
            >
              Sign up
            </Link>
            .
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signin;
