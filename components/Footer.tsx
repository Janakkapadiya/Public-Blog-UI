"use client";

import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "next-share";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="text-gray-600 mt-12 mr-auto fixed bottom-0 left-0 bg-white w-full pr-14">
      <div className="container ml-0 px-5 md:px-auto md:mx-auto flex flex-col md:flex-row items-center justify-between py-8 md:py-6">
        <a
          href="/"
          className="flex items-center justify-center md:justify-start"
        >
          <Image
            className="align-middle text-center table-cell"
            width={40}
            height={45}
            src="/icons8-petabyte-128.png"
            alt="Daily Blog"
          />
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 flex text-center sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2023 public blog —
          <a
            href="#"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @Public Blog
          </a>
        </p>
        <span className="inline-flex text-center sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start mr-6">
          <a href="https://www.facebook.com/" className="ml-3 mt-3">
            <FacebookShareButton url={"https://www.facebook.com/"}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          </a>
          <a href="https://twitter.com/" className="ml-3 mt-3">
            <TwitterShareButton url="https://twitter.com/">
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </a>
          <a href="https://www.linkedin.com/" className="ml-3 mt-3">
            <LinkedinShareButton url="https://www.linkedin.com/">
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
          </a>
          <a href="https://web.telegram.org/" className="ml-3 mt-3">
            <TelegramShareButton url="https://web.telegram.org/">
              <TelegramIcon size={32} round />
            </TelegramShareButton>
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
