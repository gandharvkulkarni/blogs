
import React from 'react';
import TrandingBlogsCarousel from '@/components/trandingBlogs/TrandingBlogsCarousel';
import fs from 'fs';
import matter from 'gray-matter';
import HomeTiles from '@/components/homeTiles/HomeTiles';

const fetchBlogs = () => {
  const dirContent = fs.readdirSync("content", "utf-8");

  return dirContent.map((file) => {
    const fileContent = fs.readFileSync(`content/${file}`, "utf-8");
    const { data, content } = matter(fileContent);
    return { data };
  });
}
export default function Home() {
  const blogs = fetchBlogs();

  const filteredCatrgory1 = blogs.filter((item) => {
    return item.data.category === 'Python for Data Analysis'
  })

  const filteredCatrgory2 = blogs.filter((item) => {
    return item.data.category === 'Data Analysis'
  })

  const filteredCatrgory3 = blogs.filter((item) => {
    return item.data.category === 'Business Analytics'
  })

  return (
    <main>
      <section className='container mx-auto my-3'>
        <TrandingBlogsCarousel />

        <HomeTiles filteredCatrgory={filteredCatrgory1}/>
        <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
        <HomeTiles filteredCatrgory={filteredCatrgory2}/>
        <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
        <HomeTiles filteredCatrgory={filteredCatrgory3}/>

      </section>
    </main>
  );
};








