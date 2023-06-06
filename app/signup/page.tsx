"use client";

import { fetchData } from "@/http";
import { setToken } from "@/lib/auth";
import { signUpSchema } from "@/schema/schema";
import { useFormik } from "formik";
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
    <form onSubmit={handleSubmit}>
      <div className="bg-grey-lighter min-h-screen flex flex-col pr-16">
        <div className="max-w-sm mx-auto my-0 flex flex-col pt-8 items-center">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="firstName"
              onChange={handleChange}
              value={values.firstName}
              onBlur={handleBlur}
              placeholder="First Name"
            />
            {touched.firstName && errors.firstName ? (
              <p className="form-error text-red-600 flex justify-center">
                {errors.firstName}
              </p>
            ) : null}
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="lastName"
              onChange={handleChange}
              value={values.lastName}
              onBlur={handleBlur}
              placeholder="Last Name"
            />
            {touched.lastName && errors.lastName ? (
              <p className="form-error text-red-600 flex justify-center">
                {errors.lastName}
              </p>
            ) : null}
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="username"
              onChange={handleChange}
              value={values.username}
              onBlur={handleBlur}
              placeholder="User Name"
            />
            {touched.username && errors.username ? (
              <p className="form-error text-red-600 flex justify-center">
                {errors.username}
              </p>
            ) : null}
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
              placeholder="Email"
            />
            {touched.email && errors.email ? (
              <p className="form-error text-red-600 flex justify-center">
                {errors.email}
              </p>
            ) : null}
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
              placeholder="Password"
            />
            {errors.confirm_password && touched.confirm_password ? (
              <p className="form-error text-red-600 flex justify-center">
                {errors.confirm_password}
              </p>
            ) : null}
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              onChange={handleChange}
              value={values.confirm_password}
              onBlur={handleBlur}
              placeholder="Confirm Password"
            />
            {errors.confirm_password && touched.confirm_password ? (
              <p className="form-error text-red-600 flex justify-center">
                {errors.confirm_password}
              </p>
            ) : null}
            {error ? (
              <div className="text-red-500 flex justify-center">{error}</div>
            ) : ""}
            <button
              disabled={isSubmitting}
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
