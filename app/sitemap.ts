export default async function sitemap() {
  const res = await fetch("https://urchin-app-4hcup.ondigitalocean.app/api");
  const allPosts = await res.json();

  const posts = allPosts.map((post: any) => ({
    url: `https://publicblog.live/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const routes = ["", "/login", "/signup", "/", "/category", "/article"].map(
    (route) => ({
      url: `https://publicblog.live${route}`,
      lastModified: new Date().toISOString(),
    })
  );

  return [...routes, ...posts];
}
