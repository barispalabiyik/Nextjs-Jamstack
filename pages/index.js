import Head from "next/head";
import Hero from "../components/Hero";
import Alert from "../components/global/Alert";
import Cta from "../components/global/Cta";
import Features from "../components/Features";
import { request } from "../lib/datocms";
import BlogCard from "../components/BlogCard";
import{ useState } from 'react';
import { useIdle} from 'react-use';
import { ALLPOSTS_QUERY } from "../data/dato_posts";




export async function getStaticProps() {
  const data = await request({
    query: ALLPOSTS_QUERY,
  });
  return {
    props: { data }
  };
}


export default function Home({data}) {
  const blogData = data.allArticles;

  const [Title , setTitle] = useState("Home")

  const isIdle = useIdle(3e3);



  return (
    <div >
      <Head>
        <title> {Title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isIdle && <Alert/>}
      <Hero />
      <Cta />
      <Features />
      <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 justify-center mx-auto  px-3 py-7">
      {blogData.slice(0,4).map((post) => (
        <BlogCard data={post} key={post.id} />
      ))}
    </div>
      
    </div>
  );
}
