"use client"
import React, { useState } from 'react';
import { trandingBlogs } from '../../trandingBlogs/trandingBlogs.js'
import Link from 'next/link.js';
import { buttonVariants } from '../ui/button.jsx';

const TrandingBlogs = ({images = false}) => {
  if(!images){
    return (
    <div className="max-w-sm" >
      <h2 className='text-md font-bold my-2'>Tranding Blogs</h2>
      <ul className='text-sm space-y-4'>
        {trandingBlogs?.map((blog, index) => (
          <li key={index} className='text-gray-400 dark:text-gray-400 italic truncate ...'>
            <a href={`${blog.link}`}>{blog.title}</a>
          </li>
        ))}
      </ul>
    </div>
    )
  }
  else{
    return(
      <div>
      <h2 className='text-3xl text-center font-bold my-3'>Tranding Blogs<span className='text-5xl text-green-500'>.</span></h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trandingBlogs?.map((blog, index) => (
          <div key={index} className="rounded-lg shadow-md overflow-hidden  dark:border-2">
          {/* Blog post image */}
          <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />

          {/* Blog post content */}
          <div className="p-4">
            {/* Blog post title */}
            <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>

            {/* Blog post description */}
            <p className=" mb-4">{blog.description}</p>

            {/* Blog post author and date */}
            <div className="text-sm  mb-4">
              <span>By {blog.author}</span>
            </div>

            {/* Link to the full blog post */}
            <Link href={`/blogpost/${blog.link}`} className={buttonVariants({ variant: "outline" })}>Click here</Link>
          </div>
        </div>
        ))}
      </div>
      </div>
    )
  }
};

export default TrandingBlogs;