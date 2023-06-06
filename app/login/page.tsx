"use client";

import { fetchData } from "@/http";
import { setToken } from "@/lib/auth";
import React, { useState } from "react";

function Signin() {
  const [error, setError] = useState("");
  const [data, setData] = useState({
    identifier: "",
    password: "",
  });

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
      console.log(loginApi?.identifier)
      await setToken(loginApi);
      window.location.replace("/");
    } catch (e) {
      setError("user not found");
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="bg-grey-lighter min-h-screen flex flex-col pr-16">
        <div className="max-w-sm mx-auto my-0 flex flex-col pt-8 items-center">
          <div className="bg-white px-12 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Login</h1>

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4 "
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
          </div>

          <div className="text-grey-dark mt-6">
            Do not have an account?
            <a
              className="no-underline border-b border-blue text-blue"
              href="/signup"
            >
              Sign up
            </a>
            .
          </div>
        </div>
      </div>
    </form>
  );
}

export default Signin;
