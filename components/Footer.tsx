import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <>
      <footer className="text-gray-600 mt-12 mr-auto fixed bottom-0 left-0 bg-white w-full">
        <div className="container ml-20 sm:ml-auto mx-auto flex items-center flex:col sm:flex-row py-8">
          <a
            href="/"
            className="flex items-center justify-center md:justify-start"
          >
            <Image
              className="align-middle text-center table-cell"
              width={40}
              height={45}
              src="/logo-removebg-preview.png"
              alt="Daily Blog"
            />
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2022 public blog —
            <a
              href="#"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @janak kapadiya
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a href="#" className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a href="#" className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
