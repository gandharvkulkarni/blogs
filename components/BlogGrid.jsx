'use client'
import { useState } from 'react';
import BlogPostPreview from './BlogPostPreview.jsx';

export default function BlogGrid({ filteredResult, blogContent }) {
    const [selectedSlug, setSelectedSlug] = useState(0);

    return (
<div className='grid grid-cols-[500px_1fr] overflow-hidden' style={{ height: 'calc(100vh - 300px)' }}>
    <div className='overflow-y-auto px-4'>
        {
            filteredResult?.length === 0 ? (
                <div className='mx-auto flex flex-col justify-center items-center'>
                    <img
                        src="https://cdn.iconscout.com/icon/free/png-256/free-data-not-found-icon-download-in-svg-png-gif-file-formats--drive-full-storage-empty-state-pack-miscellaneous-icons-1662569.png?f=webp&w=256"
                        alt='Not found Icon'
                        width={200} height={200}
                    />
                    <h1 className="text-xl font-normal text-center">No Blogs Found!</h1>
                </div>
            ) : (
                filteredResult?.map((blog, index) => (
                    <div
                        key={index}
                        onClick={() => setSelectedSlug(index)}
                        className='cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-200 transition-all rounded-lg hover:bg-opacity-10 dark:hover:bg-opacity-10'
                    >
                        <div className="rounded-lg overflow-hidden shadow dark:border-2 mb-3">
                            <div className="p-4">
                                <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
                                <div className="text-sm text-gray-400 mb-4">
                                    <span>By {blog.author}</span> | <span>{new Date(blog.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            )
        }
    </div>
    <div className='px-4 w-full'>
        <BlogPostPreview data={blogContent[selectedSlug]} slug={filteredResult[selectedSlug]?.slug}/>
    </div>
</div>

    );
}
