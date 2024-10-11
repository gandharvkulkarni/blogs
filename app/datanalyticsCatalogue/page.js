import fs from 'fs';
import matter from 'gray-matter';
import SearchBlog from '@/components/searchBlog/SearchBlog';
import PaginationControls from '@/components/pagination/PaginationControls';
import BlogGrid from '@/components/BlogGrid.jsx';
import { userAgent } from "next/server";
import { headers } from 'next/headers';
import Link from 'next/link';

const fetchBlogs = () => {
  const dirContent = fs.readdirSync("content", "utf-8");

  return dirContent.map((file) => {
    const fileContent = fs.readFileSync(`content/${file}`, "utf-8");
    const { data, content } = matter(fileContent);
    return { data, content };
  });
}

const Blog = ({ searchParams }) => {
  const { device } = userAgent({ headers: headers() });
  const deviceType = device?.type === "mobile" ? "mobile" : "desktop"
  console.log(deviceType)
  const blogs = fetchBlogs(); // Fetch blogs in the server component

  const page = searchParams?.page ?? '1';
  const per_page = searchParams?.per_page ?? '10';

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const blogPosts = blogs.map((blog) => blog.data);
  const blogContent = blogs.map((blog) => blog.content);

  let filteredResult = blogPosts?.slice(start, end);
  let filteredContent = blogContent?.slice(start, end)

  if (searchParams?.blogName) {
    filteredResult = blogPosts?.filter((blog, index) =>
      blog?.title?.toLowerCase().includes(searchParams?.blogName.toLowerCase())
    );
  
    // Filter filteredContent based on the indices of filteredResult
    filteredContent = blogContent?.filter((content, index) =>
      filteredResult.some((blog, i) => blogPosts.indexOf(blog) === index)
    );
  } else {
    filteredResult = blogPosts?.slice(start, end);
    filteredContent = blogContent?.slice(start, end);
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center block sm:block md:hidden">
      Datanalytics Catalogue<span className='text-3xl text-green-500'>.</span>
      </h1>
      <div className='ms-auto my-4 max-w-sm flex gap-2 justify-center items-center'>
        <SearchBlog placeholder="Search Blog" />
      </div>

      {
        deviceType === "desktop" ?
          <BlogGrid blogContent={filteredContent} filteredResult={filteredResult} />
          :
          filteredResult?.length === 0 ? (
            <div className='mx-auto flex flex-col justify-center items-center'>
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/free-data-not-found-icon-download-in-svg-png-gif-file-formats--drive-full-storage-empty-state-pack-miscellaneous-icons-1662569.png?f=webp&w=256"
                alt='Not found Icon'
                width={200}
                height={200}
              />
              <h1 className="text-xl font-normal text-center">No Blogs Found!</h1>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResult?.map((blog, index) => (
                <Link key={index} href={`/blogpost/${blog.slug}`} className='hover:bg-gray-400 dark:hover:bg-gray-200 transition-all rounded-lg hover:bg-opacity-10 dark:hover:bg-opacity-10'>
                  <div className="rounded-lg overflow-hidden shadow dark:border-2 h-full">
                    {/* <img src={getRandomImage()} alt={blog.title} className="w-full h-64 object-cover" /> */}
                    <div className="p-4">
                      <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
                      <p className="mb-4">{blog.description}</p>
                      <div className="text-sm mb-4">
                        <span>By {blog.author}</span> | <span>{new Date(blog.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )

      }


      <PaginationControls
        dataLength={blogPosts?.length}
        hasNextPage={end < blogPosts?.length}
        hasPrevPage={start > 0}
      />
    </div>
  );
};

export default Blog;
