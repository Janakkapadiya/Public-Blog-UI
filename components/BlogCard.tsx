import { IArticle } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { fDate } from "../utils/index";

interface IPropType {
  article: IArticle;
}

function BlogCard({ article }: IPropType) {
  return (
    <>
      <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9873084572968601"
          crossOrigin="anonymous"
        ></script>
      <Link href={`/article/${article?.attributes.Slug}`}>
        <h1 className="text-xl text-gray-600 font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary">
          {article.attributes.Title}
        </h1>
      </Link>
      <div className="flex items-center my-4">
        <div className="rounded-md overflow-hidden flex items-center justify-center mr-2">
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
      <div className="text-gray-500">
        {article.attributes.sortDescription.slice(0, 250)}{" "}
        {article.attributes.sortDescription.length >= 250 ? "..." : ""}
      </div>
    </>
  );
}

export default BlogCard;
