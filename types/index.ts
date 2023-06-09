//@ts-ignore
import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface ICategory {
  id: number;
  attributes: ICategoryAttribute;
}

export interface ICategoryAttribute {
  Title: string;
  Slug: string;
}

export interface IPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface IResourceMeta {
  pagination: IPagination;
}

export interface ICollectionResponse<T> {
  data: T;
  meta: IResourceMeta;
}

export interface IImageData {
  data: [{
    attributes: {
      formats: {
        medium: {
          url: string;
        };
      };
      url: string;
    };
  }];
}

export interface IAuthor {
  data: {
    attributes: {
      firstName: string;
      lastName: string;
      avatar: {
        data: {
          attributes: {
            formats: {
              thumbnail: {
                url: string;
              };
            };
          };
        };
      };
    };
  };
}

export interface IArticlesAttribute {
  Title: string;
  Body: string | MDXRemoteSerializeResult;
  Slug: string;
  Image: IImageData;
  createdAt: string;
  author: IAuthor;
  sortDescription: string;
}

export interface IArticle {
  id: number;
  attributes: IArticlesAttribute;
}

export type TDirection = 1 | -1;

export interface IQueryOptions {
  filters: any;
  sort: any;
  populate: any;
  pagination: {
    page: number;
    pageSize: number;
  };
}
