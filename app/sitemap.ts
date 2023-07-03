import { fetchData } from "@/http";

export default async function sitemap() {
  const cat = await fetchData(
    "https://urchin-app-4hcup.ondigitalocean.app/api/categories"
  );
  const { data: categories } = cat;

  const art = await fetchData(
    "https://urchin-app-4hcup.ondigitalocean.app/api/articles"
  );

  const { data: articles } = art;

  const category = categories?.map((category: any) => ({
    url: `https://publicblog.live/category/${category.attributes.Slug}`,
    lastModified: category.attributes.publishedAt,
  }));

  const article = articles?.map((article: any) => ({
    url: `https://publicblog.live/article/${article.attributes.Slug}`,
    lastModified: article.attributes.publishedAt,
  }));

  const routes = ["/login", "/signup", "/"].map((route) => ({
    url: `https://publicblog.live${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...category, ...article];
}
