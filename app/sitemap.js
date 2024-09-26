import fs from "fs";
import matter from 'gray-matter';
export default function sitemap() {
    const baseURL = "https://datanalytics-biz.onrender.com/";

    const dirContent = fs.readdirSync("content", "utf-8")

    const blogs = dirContent.map(file => {
        const fileContent = fs.readFileSync(`content/${file}`, "utf-8")
        const { data } = matter(fileContent)
        return data
    })

    const blogPosts = blogs.map((blog)=>{
        return {
            url: `${baseURL}/blogpost/${blog?.slug}`,
            lastModified: blog?.date
        }
    });

    return [
        {
            url: baseURL,
            lastModified: new Date()
        },
        ...blogPosts,
    ]
}