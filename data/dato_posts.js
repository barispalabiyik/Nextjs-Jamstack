const ALLPOSTS_QUERY = `query AllPostsQuery {
    allArticles {
      id
      slug
      title
      yazar
      publishDate
      kategori {
        id
        name
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
    }
  }
  `;
export { PATHS_QUERY };  


const WEB_CATEGORY_QUERY = `query AllPostsQuery{
    allArticles (filter: {kategori: {eq: "85172372"}}) {
      kategori {
        id
        name
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

export { WEB_CATEGORY_QUERY };


const SEO_CATEGORY_QUERY = `query AllPostsQuery{
  allArticles (filter: {kategori: {eq: "85172374"}}) {
    kategori {
      id
      name
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

export { SEO_CATEGORY_QUERY };