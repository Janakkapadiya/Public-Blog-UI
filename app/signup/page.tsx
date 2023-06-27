"use client";

import { fetchData } from "@/http";
import { setToken } from "@/lib/auth";
import { signUpSchema } from "@/schema/schema";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Signup = () => {
  const [error, setError] = useState("");

  const onSubmit = async (values: any, actions: any) => {
    try {
      const responseData = await fetchData(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/local/register`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: values.firstName,
            lastName: values.lastName,
            username: values.username,
            email: values.email,
            password: values.password,
            confirm_password: values.confirm_password,
          }),
          method: "POST",
        }
      );
      await setToken(responseData);
      window.location.replace("/");
    } catch (error) {
      setError("username has been already taken");
    }

    actions.resetForm();
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: signUpSchema,
    onSubmit,
  });

  return (
    <div className="top-5 py-5 left-0 h-full w-full bg-white overflow-hidden">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center h-full"
      >
        <div className="bg-white p-8 rounded shadow-md w-full sm:max-w-md">
          <h1 className="text-3xl font-semibold text-center mt-1 mb-5">
            Sign up
          </h1>
          <div className="mb-4">
            <input
              type="text"
              className={`w-full px-4 py-2 border ${
                errors.firstName && touched.firstName
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
              name="firstName"
              onChange={handleChange}
              value={values.firstName}
              onBlur={handleBlur}
              placeholder="First Name"
            />
            {touched.firstName && errors.firstName && (
              <p className="text-red-600 mt-1">{errors.firstName}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              type="text"
              className={`w-full px-4 py-2 border ${
                errors.lastName && touched.lastName
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
              name="lastName"
              onChange={handleChange}
              value={values.lastName}
              onBlur={handleBlur}
              placeholder="Last Name"
            />
            {touched.lastName && errors.lastName && (
              <p className="text-red-600 mt-1">{errors.lastName}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              type="text"
              className={`w-full px-4 py-2 border ${
                errors.username && touched.username
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
              name="username"
              onChange={handleChange}
              value={values.username}
              onBlur={handleBlur}
              placeholder="Username"
            />
            {touched.username && errors.username && (
              <p className="text-red-600 mt-1">{errors.username}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              type="email"
              className={`w-full px-4 py-2 border ${
                errors.email && touched.email
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
              name="email"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
              placeholder="Email"
            />
            {touched.email && errors.email && (
              <p className="text-red-600 mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              type="password"
              className={`w-full px-4 py-2 border ${
                errors.password && touched.password
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
              name="password"
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
              placeholder="Password"
            />
            {touched.password && errors.password && (
              <p className="text-red-600 mt-1">{errors.password}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              type="password"
              className={`w-full px-4 py-2 border ${
                errors.confirm_password && touched.confirm_password
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
              name="confirm_password"
              onChange={handleChange}
              value={values.confirm_password}
              onBlur={handleBlur}
              placeholder="Confirm Password"
            />
            {touched.confirm_password && errors.confirm_password && (
              <p className="text-red-600 mt-1">{errors.confirm_password}</p>
            )}
          </div>
          {error && <p className="text-red-600 mt-1 text-center">{error}</p>}
          <button
            disabled={isSubmitting}
            type="submit"
            className="bg-blue-500 text-white hover:bg-blue-600 focus:outline-none py-2 rounded w-full"
          >
            Create Account
          </button>
          <div className="flex justify-center items-center mt-4">
            <button
              type="button"
              className="btn btn-link btn-floating-mx-1"
              onClick={() => signIn("google")}
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
              onClick={() => signIn("github")}
            >
              <Image
                height={33}
                width={33}
                src="/github-mark.png"
                alt="GitHub Logo"
              />
            </button>
          </div>
          <div className="text-gray-600 text-center mt-6">
            Already have an account? &nbsp;
            <Link
              className="no-underline border-b border-blue text-blue"
              href="/login"
            >
              Log in
            </Link>
            .
          </div>
        </div>
      </form>
    </div>
  );
};
export default Signup;
