export default function robots() {
    const baseURL = "https://datanalytics-biz.onrender.com/";

    return {
      rules: {
        userAgent: '*',
        allow: ["/", "/blogs", "/blogpost"],
        disallow: [],
      },
      sitemap: `${baseURL}/sitemap.xml`,
    }
  }