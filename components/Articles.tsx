"use client";

import { IArticle } from "@/types";
import React from "react";
import BlogCard from "./BlogCard";

interface IProtoType {
  articles: IArticle[];
}

function Articles({ articles }: IProtoType) {
  return (
    <div className="container mx-5 md:mx-auto grid lg:grid-cols-2 grid-gap gap-16 mt-1">
      {articles.map((article, index) => {
        return (
          <div key={article.id}>
            <BlogCard key={article.id} article={article} />
          </div>
        );
      })}
    </div>
  );
}

export default Articles;
