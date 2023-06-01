import React from "react";
import { AxiosResponse } from "axios";
import { IArticle, ICollectionResponse } from "@/types";
import qs from "qs";
import { fetchArticleBySlug } from "@/http";
import ArticleSlug from "@/components/ArticleSlug";
import { serializeMarkdown } from "@/utils";

interface IPropTypes {
  params: any;
}

const Slug = async ({ params }: IPropTypes) => {
  const searchQuery = {
    populate: ["Image.data", "author.avatar"],
    filters: {
      Slug: {
        $eq: params.slug,
      },
    },
  };

  const articleQuery = qs.stringify(searchQuery);

  const { data: articles }: AxiosResponse<ICollectionResponse<IArticle[]>> =
    await fetchArticleBySlug(articleQuery);

  return (
    <div>
      <ArticleSlug article={await serializeMarkdown(articles.data[0])} />
    </div>
  );
};

export default Slug;
