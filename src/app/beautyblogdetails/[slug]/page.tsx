
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import CommentsSection from "../../components/Comments";
import RenderBodyContent from "../../components/RenderBodyContent";
import { getPostBySlug } from "@/sanity/fetch";

interface Params {
  slug:string
}

const beautyblogdetails = async ({ params }: { params : Promise<Params> }) => {

  const resolvedParams = await params;
  const blog = await getPostBySlug(resolvedParams.slug)
 
  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="my-4 md:mt-10 p-4 max-w-6xl mx-auto">
        
      <div className="relative max-w-full h-72 md:h-96 mb-6">
        <Image
          src={urlFor(blog.image).url()}
          alt={blog.title}
          layout="fill"
          objectFit="fill"
          className="rounded-md"
        />
      </div>
      <h1 className="text-2xl md:text-4xl text-[#a77b55ef] font-bold mb-4">{blog.title}</h1>
      <p className="mb-6 text-sm">
  
  On {new Date(blog.publishedAt).toDateString()}
  
</p>
     <article className="prose lg:prose-xl">
      <RenderBodyContent post={blog} />
      </article> 
      <CommentsSection/> 
 
    </div>
  );
};

export default beautyblogdetails;