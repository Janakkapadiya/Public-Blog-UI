//@ts-ignore
import axios from "axios";

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.BACKEND_API_KEY}`,
  },
});

// Categories
export const fetchCategories = async () => api.get("/api/categories");

// Articles
export const fetchArticles = async (queryString: string) =>
  api.get(`/api/articles?${queryString}`);

export const fetchArticleBySlug = async (queryString: string) =>
  api.get(`/api/articles?${queryString}`);

export async function fetchData(url: any, options = {}) {
  let response;
  if (!options) {
    response = await fetch(url);
  } else {
    response = await fetch(url, options);
  }
  const data = await response.json();

  return data;
}
