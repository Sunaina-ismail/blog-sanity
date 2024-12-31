
export const postQuery = `
  *[_type == "category"]{
      title,
      "posts": *[_type == "blogPost" && references(^._id)]{
        title,
        slug,
        image,
        author->{
          authorName
        },
        date,
         publishedAt,
        category->{
          title
        }
      }
    }
`;

export const postQueryBySlug = `
  *[_type == "blogPost" && slug.current == $slug][0]{
    title,
    slug,
    image,
    author->{
      authorName
    },
    date,
    publishedAt,
    longPost,
    category->{
      title
    }
  }
`;