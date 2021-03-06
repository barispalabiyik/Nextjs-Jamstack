import React from "react";
import Head from "next/head";
import Subheader from "../../../components/global/Subheader";
import { request } from "../../../lib/datocms";
import BlogCard from "../../../components/BlogCard";
import { CATEGORY_DATA_QUERY, ALL_CAT_PATHS } from "../../../data/dato_posts";
import { useRouter } from "next/router";

export default function web({ Catdata }) {
  const router = useRouter();
  const result = Catdata.allArticles.filter((post) =>
    post.kategori.sayfa.includes(router.query.category)
  );
  const blogData = result;
  return (
    <div>
      <Head>
        <title>Dijitalfa Web Sitesi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Subheader subHeaderTitle="Blog" breadcrumbData={router.query.category} />
      <div className="max-w-7xl mx-auto grid grid-cols-4 ">
        <div className=" col-span-3 min-h-[600px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 mt-6 gap-y-8 justify-center mx-auto h-3/5 px-3 py-7">
          {blogData.map((post) => (
            <BlogCard data={post} key={post.id} />
          ))}
        </div>

        <div className="col-span-1 ">
          <div className=" sticky top-32 flex flex-col justify-center p-4 gap-y-1 font-bold items-center border-2 border-indigo-600 rounded-md mt-14 shadow-lg">
            <h2 className="font-black text-3xl">Son Yazılar</h2>
            {blogData.map(
              (post, index) =>
                index < 3 && (
                  <a href={`/blog/${post.slug}`} key={post.id}>
                    <h3 className="mt-5">{post.title}</h3>
                  </a>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const Catdata = await request({
    query: CATEGORY_DATA_QUERY,
  });
  return {
    props: { Catdata },
  };
}

export const getStaticPaths = async () => {
  const slugQuery = await request({
    query: ALL_CAT_PATHS,
  });

  let paths = [];

  slugQuery.allCategories.map((p) => paths.push(`/blog/${p.sayfa}`));

  return {
    paths,
    fallback: false,
  };
};
