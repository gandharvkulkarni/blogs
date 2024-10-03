import React from 'react'
import fs from "fs"
import matter from "gray-matter"

const RelatedBlogs = ({params}) => {
    const filepath = `content/${params.slug}.md`

    if (!fs.existsSync(filepath)) {
        notFound()
        return
    }

    const fileContent = fs.readFileSync(filepath, "utf-8")
    const { content, data } = matter(fileContent)
    
    return (
        <div className="max-w-sm" >
      <h2 className='text-md font-bold my-2'>Related Blogs</h2>
      <ul className='text-sm space-y-4'>
        {data?.relatedBlogs?.map((blog, index) => (
          <li key={index} className='text-gray-400 dark:text-gray-400 italic truncate ...'>
            <a href={`${blog.slug}`}>{blog.title}</a>
          </li>
        ))}
      </ul>
    </div>
    )
}

export default RelatedBlogs