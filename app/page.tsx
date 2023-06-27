import {
  IArticle,
  ICategory,
  ICollectionResponse,
  IPagination,
  IQueryOptions,
} from "../types";
import Tabs from "../components/Tabs";
import { fetchArticles, fetchCategories } from "@/http";
import React from "react";

import Articles from "@/components/Articles";
import { AxiosResponse } from "axios";
import Pagination from "@/components/Pagination";
import { capitalizeFirstLetter, makeCategory } from "@/utils";
import Head from "next/head";
//@ts-ignore
import qs from "qs";

interface IPropTypes {
  params: any;
  searchParams: any;
}

const Home = async ({ params, searchParams }: IPropTypes) => {
  const options: Partial<IQueryOptions> = {
    populate: ["author.avatar"],
    sort: ["id:desc"],
    pagination: {
      page: searchParams.page ? +searchParams.page : 1,
      pageSize: 4 ? 4 : 1,
    },
  };

  if (searchParams.search) {
    options.filters = {
      Title: {
        $containsi: searchParams.search,
      },
    };
  }

  const formattedCategory = () => {
    return capitalizeFirstLetter(
      "Public Blog " + makeCategory(params.category)
    );
  };

  const articlesQuery = qs.stringify(options);

  const { data: categories }: AxiosResponse<ICollectionResponse<ICategory[]>> =
    await fetchCategories();

  const { data: articles }: AxiosResponse<ICollectionResponse<IArticle[]>> =
    await fetchArticles(articlesQuery);

  const { page, pageCount }: IPagination = articles.meta.pagination;

  return (
    <div>
      <Head>
        <title>{formattedCategory()}</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="/favicon.ico"
          style={{ height: "20px", width: "20px" }}
        />
      </Head>
      <Tabs categories={categories.data} />
      <Articles articles={articles.data} />
      <Pagination
        searchParams={searchParams}
        page={page}
        pageCount={pageCount}
      />
    </div>
  );
};

export default Home;
