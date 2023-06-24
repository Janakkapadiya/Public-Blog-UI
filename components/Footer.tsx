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
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-300 fixed bottom-0 left-0 right-0">
      <div className="mx-3 py-3">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex mb-3 md:mb-0 mt-1">
            <a href="https://www.facebook.com/" className="mr-3">
              <FacebookShareButton url={"https://www.facebook.com/"}>
                <FacebookIcon size={32} round />
              </FacebookShareButton>
            </a>
            <a href="https://twitter.com/" className="mr-3">
              <TwitterShareButton url="https://twitter.com/">
                <TwitterIcon size={32} round />
              </TwitterShareButton>
            </a>
            <a href="https://www.linkedin.com/" className="mr-3">
              <LinkedinShareButton url="https://www.linkedin.com/">
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
            </a>
            <a href="https://web.telegram.org/" className="mr-3">
              <TelegramShareButton url="https://web.telegram.org/">
                <TelegramIcon size={32} round />
              </TelegramShareButton>
            </a>
          </div>
          <p className="flex text-gray-800 md:text-sm sm:text-sm text-base">
            © 2023 public blog —
            <a
              href="/"
              className="text-gray-800 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @Public Blog
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
