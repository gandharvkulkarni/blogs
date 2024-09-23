import React from 'react';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import SearchBlog from '@/components/searchBlog/SearchBlog';
import fs from "fs";
import matter from 'gray-matter';


const dirContent = fs.readdirSync("content", "utf-8")

const blogs = dirContent.map(file => {
  const fileContent = fs.readFileSync(`content/${file}`, "utf-8")
  const { data } = matter(fileContent)
  return data
})



/**
 * Blog component that renders a list of blog posts.
 * Each blog post includes an image, title, description, author, date, and a link to the full post.
 * 
 * @returns {JSX.Element} The rendered blog component.
 */
const Blog = ({ searchParams }) => {
  const query = searchParams?.blogName || '';
  let filteredResult = blogs;
  if (searchParams?.blogName) {
    filteredResult = blogs?.filter(blog => blog?.title?.toLowerCase().includes(searchParams?.blogName.toLowerCase()))
  } else {
    filteredResult = blogs;
  }

  return (
    <div className="container mx-auto p-4">
      {/* Main heading for the blog section */}
      <h1 className="text-4xl font-bold mb-8 text-center">Blogs<span className='text-5xl text-green-500'>.</span></h1>
      <div className='ms-auto my-4 max-w-sm flex gap-2 justify-center items-center'>
        <SearchBlog placeholder="Search Blog" />

      </div>
      {/* Grid layout for blog posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
          filteredResult.length === 0 ?
          <div className='mx-auto flex flex-col justify-center items-center'>
          <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-data-not-found-icon-download-in-svg-png-gif-file-formats--drive-full-storage-empty-state-pack-miscellaneous-icons-1662569.png?f=webp&w=256"
          alt='Not found Icon'
          width={200} height={200}/>
          <h1 className="text-xl font-normal text-center">No Blogs Found!</h1>

          </div>
          :
          filteredResult.map((blog, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow dark:border-2">
              <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
  
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>

                <p className="mb-4">{blog.description}</p>
  
                <div className="text-sm mb-4">
                  <span>By {blog.author}</span> | <span>{new Date(blog.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
                </div>
  
                <Link href={`/blogpost/${blog.slug}`} className={buttonVariants({ variant: "outline" })}>Click here</Link>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};
export default Blog;