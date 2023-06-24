"use client";
/* eslint-disable @next/next/no-img-element */
import { IArticle } from "@/types";
import { fDate } from "@/utils";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "next-share";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface IPropType {
  article: IArticle;
}

function ArticleSlug({ article }: IPropType) {
  const handleSubmit = (e: any) => {
    console.log("clicked");
  };

  return (
    <>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9873084572968601"
          crossOrigin="anonymous"
        ></script>
        <title>{article.attributes.Title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="../public/logo-removebg-preview.png" />
      </Head>
      <div className="mx-auto container px-3 my-12 grid lg:grid-cols-3 gap-12 single-article">
        <div className="col-span-2 font-bold mb-10">
          <h1 className="text-2xl">{article.attributes.Title}</h1>
          <div className="flex items-center my-4">
            <div className="rounded-lg overflow-hidden flex items-center justify-center mr-2">
              <Image
                src={`https://urchin-app-4hcup.ondigitalocean.app${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`}
                alt="profile image"
                height={20}
                width={20}
              />
            </div>
            <span className="text-sm font-bold text-gray-600">
              {article.attributes.author.data.attributes.firstName}{" "}
              {article.attributes.author.data.attributes.lastName} on
            </span>
            <span className="text-gray-400 ml-2 flex">
              {fDate(article.attributes.createdAt)}
            </span>
          </div>
          <div className="text-sm not-italic font-normal leading-8 text-gray-600">
            <Image
              height={400}
              width={700}
              className="w-auto my-12 mb-5"
              src={`https://urchin-app-4hcup.ondigitalocean.app${article.attributes.Image.data[0].attributes.url}`}
              alt={article.attributes.Title}
            />
            <MDXRemote
              {...(article.attributes.Body as MDXRemoteSerializeResult)}
            />
          </div>
        </div>
        <div className="sticky top-0">
          <h2 className="font-bold text-gray-600 text-lg">
            Signup to our newsletter
          </h2>
          <p className="mt-4 text-gray-500">
            Get the latest article on all things data delivered straight to your
            inbox
          </p>
          <input
            className="border w-full p-2 pl-3 my-6 outline-primary"
            type="email"
            placeholder="Your work email"
          />
          <button
            className="border-2 border-primary rounded py-1 px-6 text-primary font-bold"
            onClick={handleSubmit}
          >
            Subscribe
          </button>
          <hr className="my-6 border-gray-100" />
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <span className="text-gray-500 mr-2">Share</span>
            <a className="text-gray-500" href="#">
              <FacebookShareButton url="https://www.facebook.com/">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </FacebookShareButton>
            </a>
            <a className="ml-3 text-gray-500" href="#">
              <TwitterShareButton url="https://twitter.com/">
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
              </TwitterShareButton>
            </a>
            <a className="ml-3 text-gray-500" href="#">
              <LinkedinShareButton url="https://www.linkedin.com/">
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
              </LinkedinShareButton>
            </a>
          </span>
          <hr className="my-6 border-gray-100" />
        </div>
      </div>
    </>
  );
}

export default ArticleSlug;
