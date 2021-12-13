import { Image, StructuredText } from "react-datocms";
import { request } from "../../../../lib/datocms";
import { BLOG_QUERY, PATHS_QUERY } from "../../../../data/dato_posts";
import Link from "next/link";

export default function BlogPost({ postData }) {
  console.log(postData.author.authorname);
  return (
    <>
      <div className="max-w-7xl mx-auto flex flex-wrap py-6">
        <section className="w-full md:w-2/3 flex flex-col items-center px-3">
          <article className="flex flex-col shadow rounded-md">
            <Image data={postData.coverImage.responsiveImage} />
            <div className="bg-white flex flex-col justify-start p-6">
              <ol className="list-reset flex text-grey-dark">
                <li>
                  <a href="/" className="font-bold">
                    Anasayfa
                  </a>
                </li>
                <li>
                  <span className="mx-2">{">"}</span>
                </li>
                <li>
                  <a href="/blog" className="font-bold">
                    Blog
                  </a>
                </li>
                <li>
                  <span className="mx-2">{">"}</span>
                </li>
                <li>
                  <Link href={`/blog/${postData.kategori.sayfa}`}>
                    <a className="font-bold text-indigo-600">
                      {postData.kategori.name}
                    </a>
                  </Link>
                </li>
              </ol>

              <h1 className="text-3xl font-bold hover:text-gray-700 pb-4">
                {postData.title}
              </h1>
              <p href="#" className="text-sm pb-8">
                Yazan:{" "}
                <a href={`/yazar/${postData.author.authorLink}`} className="font-semibold hover:text-gray-800">
                  {postData.author.authorname}</a>,
                Yayın Tarihi: {postData.publishDate}
              </p>
              <StructuredText
                data={postData.content}
                renderBlock={({ record }) => {
                  switch (record.__typename) {
                    case "ImageRecord":
                      return <Image data={record.image.responsiveImage} />;
                    default:
                      return null;
                  }
                }}
              />
            </div>
          </article>

          <div className="w-full flex pt-6">
            <a
              href="#"
              className="w-5/12 bg-white border-indigo-600 hover:border-indigo-400  border-2 shadow hover:shadow-md text-left p-6 mr-auto rounded-md"
            >
              <p className="text-lg text-indigo-800 font-bold flex items-center">
                <i className="fas fa-arrow-left pr-1"></i> Previous
              </p>
              <p className="pt-2">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</p>
            </a>
            <a
              href="#"
              className="w-5/12 bg-white rounded-md shadow hover:shadow-md text-right p-6 border-indigo-600 hover:border-indigo-400 border-2"
            >
              <p className="text-lg text-indigo-800 font-bold flex items-center justify-end">
                Next <i className="fas fa-arrow-right pl-1"></i>
              </p>
              <p className="pt-2">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</p>
            </a>
          </div>

          <div className="w-full flex flex-col text-center md:text-left md:flex-row shadow bg-white mt-10 mb-10 p-6">
            <div className="w-full md:w-1/5 flex justify-center md:justify-start pb-4">
                <Image className="rounded-full shadow h-32 w-32"  data={postData.author.gorsel.responsiveImage} />
            </div>
            <div className="flex-1 flex flex-col justify-center md:justify-start">
              <p className="font-semibold text-2xl">
                {postData.author.authorname}
              </p>
              <p className="pt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur vel neque non libero suscipit suscipit eu eu urna.
              </p>
              <div className="flex items-center justify-center md:justify-start text-2xl no-underline text-indigo-800 pt-4">
                <a className="" href="#">
                  <i className="fab fa-facebook"></i>
                </a>
                <a className="pl-4" href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="pl-4" href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="pl-4" href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <aside className="w-full md:w-1/3 flex flex-col items-center px-3 ">
          <div className="md:sticky md:top-32">
            <div className="w-full bg-white shadow flex flex-col my-4 p-6 ">
              <p className="text-xl font-semibold pb-5">About Us</p>
              <p className="pb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas mattis est eu odio sagittis tristique. Vestibulum ut
                finibus leo. In hac habitasse platea dictumst.
              </p>
              <a
                href="#"
                className="w-full bg-indigo-600 text-white font-bold text-sm uppercase rounded-md hover:bg-indigo-700 flex items-center justify-center px-2 py-3 mt-4"
              >
                Get to know us
              </a>
            </div>

            <div className="w-full bg-white shadow flex flex-col my-4 p-6 ">
              <p className="text-xl font-semibold pb-5">Instagram</p>
              <div className="grid grid-cols-3 gap-3">
                <img
                  className="hover:opacity-75"
                  src="https://source.unsplash.com/collection/1346951/150x150?sig=1"
                />
                <img
                  className="hover:opacity-75"
                  src="https://source.unsplash.com/collection/1346951/150x150?sig=2"
                />
                <img
                  className="hover:opacity-75"
                  src="https://source.unsplash.com/collection/1346951/150x150?sig=3"
                />
                <img
                  className="hover:opacity-75"
                  src="https://source.unsplash.com/collection/1346951/150x150?sig=4"
                />
                <img
                  className="hover:opacity-75"
                  src="https://source.unsplash.com/collection/1346951/150x150?sig=5"
                />
                <img
                  className="hover:opacity-75"
                  src="https://source.unsplash.com/collection/1346951/150x150?sig=6"
                />
                <img
                  className="hover:opacity-75"
                  src="https://source.unsplash.com/collection/1346951/150x150?sig=7"
                />
                <img
                  className="hover:opacity-75"
                  src="https://source.unsplash.com/collection/1346951/150x150?sig=8"
                />
                <img
                  className="hover:opacity-75"
                  src="https://source.unsplash.com/collection/1346951/150x150?sig=9"
                />
              </div>
              <a
                href="#"
                className="w-full bg-indigo-600 text-white font-bold text-sm uppercase rounded-md hover:bg-indigo-700 flex items-center justify-center px-2 py-3 mt-6"
              >
                <i className="fab fa-instagram mr-2"></i> Follow
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const post = await request({
    query: BLOG_QUERY,
    variables: { slug: params.slug },
  });
  return {
    props: {
      postData: post.article,
    },
  };
};

export const getStaticPaths = async () => {
  const slugQuery = await request({
    query: PATHS_QUERY,
  });

  let paths = [];
  slugQuery.allArticles.map((p) =>
    paths.push(`/blog/${p.kategori.sayfa}/${p.slug}`)
  );

  return {
    paths,
    fallback: false,
  };
};
