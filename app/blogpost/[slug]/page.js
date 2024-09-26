import fs from "fs"
import matter from "gray-matter"
import { notFound } from "next/navigation"
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers'
import OnThisPage from "@/components/onthispage"
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import AdBanner from "@/components/adsense/AdBanner"
import TrandingBlogs from "@/components/trandingBlogs/TrandingBlogs"
import RelatedBlogs from "@/components/relatedBlogs/RelatedBlogs"
import ShareButton from "@/components/shareButton/ShareButton"
import { IoMdTime } from "react-icons/io";


export async function generateMetadata({ params, searchParams }, parent) {
  
    const filepath = `content/${params.slug}.md`
    // read route params

    if (!fs.existsSync(filepath)) {
        return notFound()
    }
    const id = params.slug
    const fileContent = fs.readFileSync(filepath, "utf-8")
    const { data } = matter(fileContent)

    return {
        title: data?.title,
        openGraph:{
            images: [data?.image],
            description: data?.description
        }
    }
}


export default async function Page({ params }) {

    const filepath = `content/${params.slug}.md`

    if (!fs.existsSync(filepath)) {
        notFound()
        return
    }

    const fileContent = fs.readFileSync(filepath, "utf-8")
    const { content, data } = matter(fileContent)

    const processor = unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeDocument, { title: '👋🌍' })
        .use(rehypeFormat)
        .use(rehypeStringify)
        .use(rehypeSlug)
        .use(rehypeAutolinkHeadings)
        .use(rehypePrettyCode, {
            theme: "github-dark",
            transformers: [
                transformerCopyButton({
                    visibility: 'always',
                    feedbackDuration: 3_000,
                }),
            ],
        })

    const htmlContent = (await processor.process(content)).toString()



    return (
        <div className="container mx-auto p-4">
            <div className="relative w-full h-64">
                <img src={data.image} alt={data.title} className="w-full h-64 object-cover rounded-lg" />
                <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-[#fff] dark:from-[#030712] to-transparent"></div>
            </div>

            <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
            <p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic">{data.description}</p>

            <div className="flex gap-2 mt-5">
                <p className="text-sm text-gray-500 mb-4 italic">By {data.author}</p>
                <p className="text-sm text-gray-500 mb-4 flex justify-center items-center gap-1"> <IoMdTime /> {data.date}</p>
            </div>
            <div className="relative lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
                <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="prose dark:prose-invert"></div>

                <div className="hidden xl:block">
                    <section className="sticky top-16 right-0 flex flex-col p-6" >
                        <ShareButton title={data.title} url={`/blogpost/${params.slug}`}/>
                        <hr className="h-px my-4 bg-transparent border-0"></hr>

                        <OnThisPage htmlContent={htmlContent} />
                        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

                        <RelatedBlogs params={params} />
                        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

                        <TrandingBlogs />
                    </section>

                </div>

            </div>
            <section className="my-3">
                <ShareButton/>
            </section>
            <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
            <TrandingBlogs images={true} />
            {/* <AdBanner dataAdFormat="auto"
                dataFullWidthResponsive={true}
                dataAdSlot="4700602838719113" /> */}
        </div>
    )
}