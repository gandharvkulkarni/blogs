"use client"
import React, {useRef, useEffect} from 'react';
import TrandingBlogsCarousel from '@/components/trandingBlogs/TrandingBlogsCarousel';
export default function Home() {
    // Create reference to store the DOM element containing the animation
    const el = useRef(null);

    // useEffect(() => {
    //   const typed = new Typed(el.current, {
    //     strings: ['Data Analytics', 'Python', 'SQL', 'Excel', 'Machine Learning'],
    //     typeSpeed: 50,
    //     loop:true,
    //     fadeOut:true
    //   });
  
    //   return () => {
    //     // Destroy Typed instance during cleanup to stop animation
    //     typed.destroy();
    //   };
    // }, []); 

  return (
    <main>
      {/* <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">free blog</span> for <span className="font-semibold decoration-primary text-green-500"><span ref={el} /></span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Discover your corner of the data world.
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">
             
            </form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="tailwind css components" className="w-full h-full max-w-md mx-auto" />
        </div>
      </section> */}
      <section className='container mx-auto my-3'>
      <TrandingBlogsCarousel/>
      </section>
    </main>
  );
};








