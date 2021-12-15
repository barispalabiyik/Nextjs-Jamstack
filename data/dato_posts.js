const ALLPOSTS_QUERY = `query AllPostsQuery {
    allArticles {
      id
      slug
      title
      yazar
      author {
        authorname
        authorLink
        id
        gorsel {
          responsiveImage {
            width
            webpSrcSet
            title
            srcSet
            src
            sizes
            height
            bgColor
            base64
            aspectRatio
            alt
          }
        }
      }
      publishDate
      kategori {
        id
        name
        sayfa
      }
      excerpt
      coverImage {
        responsiveImage {
          alt
          base64
          bgColor
          title
          sizes
          aspectRatio
          height
          width
          webpSrcSet
          srcSet
          src
        }
      }

    }
  }`;

export { ALLPOSTS_QUERY };

const BLOG_QUERY = `query MyQuery($slug: String) {
    article(filter: {slug: {eq: $slug}}) {
      kategori {
        id
        name
        sayfa
      }
      author {
        authorname
        authorLink
        aciklama
        id
        gorsel {
          responsiveImage {
            width
            webpSrcSet
            title
            srcSet
            src
            sizes
            height
            bgColor
            base64
            aspectRatio
            alt
          }
        }
      }
      id
      publishDate
      slug
      yazar
      title
      content {
        value
        blocks {
          __typename
          ... on ImageRecord {
            id
            image {
              responsiveImage {
                alt
                aspectRatio
                base64
                bgColor
                height
                sizes
                src
                srcSet
                title
                webpSrcSet
                width
              }
            }
          }
        }
      }
      coverImage {
        responsiveImage {
          alt
          aspectRatio
          base64
          bgColor
          height
          sizes
          src
          srcSet
          title
          webpSrcSet
          width
        }
      }
    }
  }
  `;

export { BLOG_QUERY };

const PATHS_QUERY = `query MyQuery {
    allArticles {
      slug
      kategori {
        sayfa
      }
    }
  }
  `;
export { PATHS_QUERY };

const CATEGORY_DATA_QUERY = `query allCatPaths {
  allArticles {
      kategori {
        id
        name
        sayfa
      }
      id
      slug
      title
      publishDate
      excerpt
      coverImage {
        responsiveImage {
          alt
          base64
          bgColor
          title
          sizes
          aspectRatio
          height
          width
          webpSrcSet
          srcSet
          src
        }
      }

    }
  }`;

export { CATEGORY_DATA_QUERY };

const ALL_CAT_PATHS = `query allCatPaths {
  allCategories {
    sayfa
  }
}`;

export { ALL_CAT_PATHS };


const ALL_AUTHORS_QUERY =`
query MyQuery {
  allAuthors {
    id
    gorsel {
      responsiveImage {
        alt
        aspectRatio
        base64
        bgColor
        height
        sizes
        src
        srcSet
        title
        webpSrcSet
        width
      }
    }
    authorname
    authorLink
    aciklama
  }
}
`;

export { ALL_AUTHORS_QUERY };

const ALL_AUTHORS_PATHS =`
query MyQuery {
  allAuthors {
    authorLink
  }
}
`;

export { ALL_AUTHORS_PATHS };


const AUTHOR_DATA_QUERY = `query MyQuery($slug: String) {
    author(filter: {authorLink: {eq: $slug}}) {
      id
      authorname
      authorLink
      aciklama
      gorsel {
        responsiveImage {
          width
          webpSrcSet
          title
          srcSet
          src
          sizes
          height
          bgColor
          base64
          aspectRatio
          alt
        }
      }
    }
  }`;

export { AUTHOR_DATA_QUERY };
  

