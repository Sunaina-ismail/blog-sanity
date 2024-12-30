
export const postQuery = `
  *[_type == "blogPost"]{
    title,
    slug,
    image,
    author->{
      authorName
    },
    publishedAt,
    longPost,
    category->{
      title
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
    publishedAt,
    longPost,
    category->{
      title
    }
  }
`;