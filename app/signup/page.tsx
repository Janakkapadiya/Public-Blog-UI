"use client";

import { fetchData } from "@/http";
import { setToken } from "@/lib/auth";
import { useState } from "react";

const Signup = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const responseData = await fetchData(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/local/register`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: userData.firstName,
            lastName: userData.lastName,
            username: userData.username,
            email: userData.email,
            password: userData.password,
            confirm_password: userData.confirm_password,
          }),
          method: "POST",
        }
      );
      await setToken(responseData);
      window.location.replace("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-grey-lighter min-h-screen flex flex-col pr-16">
        <div className="max-w-sm mx-auto my-0 flex flex-col pt-8 items-center">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="firstName"
              onChange={(e) => handleChange(e)}
              placeholder="First Name"
            />

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="lastName"
              onChange={(e) => handleChange(e)}
              placeholder="Last Name"
            />

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="username"
              onChange={(e) => handleChange(e)}
              placeholder="User Name"
            />

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              onChange={(e) => handleChange(e)}
              placeholder="Email"
            />

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              onChange={(e) => handleChange(e)}
              placeholder="Password"
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              onChange={(e) => handleChange(e)}
              placeholder="Confirm Password"
            />

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-gray-800 text-white hover:bg-gray-600 focus:outline-none my-1"
            >
              Create Account
            </button>

            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <a
              className="no-underline border-b border-blue text-blue"
              href="/login"
            >
              Log in
            </a>
            .
          </div>
        </div>
      </div>
    </form>
  );
};
export default Signup;
