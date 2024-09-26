'use client';
import React from 'react'
import { trandingBlogs } from '../../trandingBlogs/trandingBlogs.js'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel.jsx'
import Link from 'next/link.js'
import Autoplay from "embla-carousel-autoplay"
import ShareButton from '../shareButton/ShareButton.jsx'
import { useEffect } from 'react'
import { useState } from 'react'

const TrandingBlogsCarousel = () => {
    const [origin, setOrigin] = useState("");
    
    useEffect(()=>{
       setOrigin(location.origin)
    },[])
    return (
        <>
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 5000,
                    }),
                ]}
                className="w-full"
            >
                <CarouselContent>
                    {trandingBlogs.map((blog, index) => (
                        <CarouselItem key={index}>
                            <div className="rounded-lg overflow-hidden shadow border">
                                <Link href={`/blogpost/${blog.link}`}>
                                    <div className="relative w-full h-64">
                                        <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-lg" />
                                        <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-[#fff] dark:from-[#030712] to-transparent"></div>
                                    </div>

                                    <div className="p-4">
                                        <h2 className="text-2xl font-bold mb-2 text-center">{blog.title}</h2>
                                        <div className="text-sm text-center flex flex-col gap-4 justify-center items-center">
                                            <span>By {blog.author}</span>
                                        </div>
                                    </div>
                                </Link>

                                <section className='flex justify-center items-center mb-2'>
                                    <ShareButton title={blog.title} url={`/blogpost/${blog.link}`} />
                                </section>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>
    )
}

export default TrandingBlogsCarousel