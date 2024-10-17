import React from 'react'
import Link from 'next/link';

const HomeTiles = ({filteredCatrgory}) => {
  return (
    <section className='my-6'>
    <div className='my-4 flex justify-between items-center gap-6'>
      <h1 className='text-2xl font-bold text-green-500'>{filteredCatrgory[0].data.category}</h1>
      <hr className="flex-1 bg-gray-200 border dark:bg-gray-700 hidden sm:hidden md:block" />
      <Link className='text-gray-400 hidden sm:hidden md:block' href={`/datanalyticsCatalogue?category=${filteredCatrgory[0].data.category}`}>See all posts related to {filteredCatrgory[0].data.category}</Link>
      <Link className='text-gray-400 block sm:block md:hidden' href={`/datanalyticsCatalogue?category=${filteredCatrgory[0].data.category}`}>See all</Link>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {filteredCatrgory.slice(0, 4)?.map((data, index) => {
        const blog = data.data
        return (
          <Link key={index} href={`/blogpost/${blog?.slug}`} className='hover:bg-gray-400 dark:hover:bg-gray-200 transition-all rounded-lg hover:bg-opacity-10 dark:hover:bg-opacity-10'>
            <div className="rounded-lg overflow-hidden shadow dark:border-2 h-full">
              {/* <img src={getRandomImage()} alt={blog.title} className="w-full h-64 object-cover" /> */}
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2">{blog?.title}</h2>
                <div className="text-sm mb-4 text-gray-400">
                  <span>{new Date(blog?.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
                </div>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  </section>
  )
}

export default HomeTiles