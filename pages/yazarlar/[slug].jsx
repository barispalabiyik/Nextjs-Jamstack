import { Image, StructuredText } from "react-datocms";
import { request } from "../../lib/datocms";
import { ALL_AUTHORS_PATHS, AUTHOR_DATA_QUERY} from "../../data/dato_posts";
import Link from "next/link";

export default function BlogPost({ postData }) {
  return (
    
    <>
      <div className="max-w-7xl mx-auto flex flex-wrap py-6">
        <section className="w-full md:w-2/3 flex flex-col items-center px-3">
          <article className="flex flex-col shadow rounded-md">
            <Image data={postData.gorsel.responsiveImage} />
            <div className="bg-white flex flex-col justify-start p-6">

              <h1 className="text-3xl font-bold hover:text-gray-700 pb-4">
                {postData.authorname}
              </h1>
              <p href="#" className="text-sm pb-8">
                Yazan:{" "}
                <a href={`/yazar/${postData.authorLink}`} className="font-semibold hover:text-gray-800">
                  {postData.authorname}</a>,
                Yayın Tarihi: {postData.publishDate}
              </p>
              
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

export const getStaticPaths = async () => {
  const slugQuery = await request({
    query: ALL_AUTHORS_PATHS,
  });

  let paths = [];
  slugQuery.allAuthors.map((p) =>
    paths.push(`/yazarlar/${p.authorLink}`)
  );

  return {
    paths,
    fallback: false,
  };
};


export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  const authorData = await request({
    query: AUTHOR_DATA_QUERY,
    variables: { slug: slug },
  });
  return {
    props: {
      postData: authorData.author,
    },
  };
};

