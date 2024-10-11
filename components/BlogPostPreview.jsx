import React, { useEffect, useState } from 'react';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import rehypePrettyCode from 'rehype-pretty-code';
import { transformerCopyButton } from '@rehype-pretty/transformers';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import { Button } from './ui/button';
import Link from 'next/link';

const BlogPostPreview = ({ data, slug }) => {
    const [htmlContent, setHtmlContent] = useState('');
    useEffect(() => {
        const processContent = async () => {
            try {
                const processor = unified()
                    .use(remarkParse)
                    .use(remarkRehype)
                    .use(rehypeDocument, { title: '👋🌍' })
                    .use(rehypeFormat)
                    .use(rehypeStringify)
                    .use(rehypeSlug)
                    .use(rehypeAutolinkHeadings)
                    .use(rehypePrettyCode, {
                        theme: 'github-dark',
                        transformers: [
                            transformerCopyButton({
                                visibility: 'always',
                                feedbackDuration: 3000,
                            }),
                        ],
                    });

                const processedContent = await processor.process(data);
                setHtmlContent(processedContent.toString());
            } catch (error) {
                console.error('Error processing content:', error);
            }
        };

        processContent();
    }, [data]);

    return (
        slug && 
        <div className='relative w-full'>
            <div
                dangerouslySetInnerHTML={{ __html: htmlContent }}
                className="prose dark:prose-invert !max-w-full !w-full h-[550px] overflow-hidden blog-preview relative after:bg-gradient-to-b from-transparent dark:to-gray-950 to-white"
            ></div>
             <Link
             href={`/blogpost/${slug}`}
             className='transition-all dark:bg-green-500 dark:text-gray-950 bg-green-500 text-white px-4 py-2 rounded-lg dark:hover:bg-opacity-80 hover:bg-opacity-80 absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10'>Read More</Link>
        </div>
    );
};

export default BlogPostPreview;
