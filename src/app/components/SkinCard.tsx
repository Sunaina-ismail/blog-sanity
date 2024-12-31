import { urlFor } from '@/sanity/lib/image';
import { skinCardType } from '@/types/skincardtype';
import Image from 'next/image';
import Link from 'next/link';


export default function SkinCard({blog}:{blog:skinCardType}) {
  return (
    <Link href={`/beautyblogdetails/${blog.slug.current}`}> 
    <div className="px-2  font-serif ">  
      <div className="py-4 ">
        <div className="overflow-hidden">
          <Image
            src={urlFor(blog.image).url()}
            alt="Skincare image"
            width={500}
            height={700}
            className="rounded-md h-60 md:h-72"
          />
       
        </div>
      
      </div>
      <div className="max-w-sm">
            <h2 className="text-base md:text-lg font-semibold text-gray-800 hover:text-orange-400">
             {blog.title}
            </h2>
            <p className="text-base font-medium text-green-600 mt-2">{blog.date}</p>
          </div>
    </div>
    </Link>
  );
}
