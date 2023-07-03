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
  }));

  const article = articles?.map((article: any) => ({
    url: `https://publicblog.live/article/${article.attributes.Slug}`,
  }));

  const routes = ["/login", "/signup"]?.map((route) => ({
    url: `https://publicblog.live${route}`,
  }));

  return [...routes, ...category, ...article];
}
