import React from 'react';
import SkinCard from '../components/SkinCard';
import { getPosts } from '@/sanity/fetch';

const SkinBlog = async () => {

  const fetchCategories:any = await getPosts();
 



  return (
    <div className="px-4 md:px-3 my-10 container mx-auto">
             {fetchCategories.map((category: any, index: number) => (
        <div className='py-5 md:py-6' key={index} id={category.title.toLowerCase().replace(/ /g, '-')}> 
          
          <h2 className="px-4 text-2xl md:text-3xl font-bold md:mb-4">{category.title}</h2>

        
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 ">
            {category.posts.slice(0, 3).map((post: any, i: number) => (
              <SkinCard key={i} blog={post} />
            ))}
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default SkinBlog;