// Query for all posts
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

// Query for post by slug
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