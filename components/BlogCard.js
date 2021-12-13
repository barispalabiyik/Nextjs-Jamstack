import React from "react";
import Link from "next/link";
import { Image } from "react-datocms";

export default function BlogCard({data}) {
  return (
    <div className="flex justify-center items-center flex-col hover:scale-95 transition-all cursor-pointer hover:grayscale duration-300">
    <a href={`/blog/${data.slug}`}>
      <Image data={data.coverImage.responsiveImage}/>
      </a>
    <div className="relative -mt-16 w-11/12 ">
        <div className="bg-white p-6 rounded-lg shadow-lg mx-auto min-h-[220px] flex flex-col justify-between">
          <div className="flex items-baseline justify-between">
            <span className="bg-indigo-600 text-white text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
            {data.kategori.name}
            </span>
            <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
              {data.yazar}
            </div>
          </div>
          <Link href={`/blog/${data.slug}`}>
            <a className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
              {data.title}
            </a>
          </Link>

          <div className="mt-1">
            <span className="text-gray-600 text-sm "> {data.excerpt}</span>
          </div>
          <div className="mt-4 flex justify-between">
          <Link href={`/blog/${data.slug}`}>

            <a className="text-indigo-600 text-md font-semibold">
              Read More
            </a>
            </Link>

            <span className="text-gray-600 text-sm ml-2">
              {data.publishDate}{" "}
            </span>
          </div>
        </div>
      </div>
      
    </div>
  );
}
