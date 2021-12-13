import React from "react";
import Link from "next/link";
import { Image } from "react-datocms";

export default function BlogCard({ data }) {
  return (
    <Link href={`/blog/${data.kategori.sayfa}/${data.slug}`}>
      <a>
    <div className="flex justify-center items-center flex-col hover:scale-95 transition-all cursor-pointer hover:grayscale duration-300">
        <Image data={data.coverImage.responsiveImage} />
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
         
            <h4 className="mt-1 text-md font-semibold uppercase leading-tight">
              {data.title}
            </h4>
         

          <div className="mt-1">
            <span className="text-gray-600 text-sm "> {data.excerpt}</span>
          </div>
          <div className="mt-4 flex justify-between">
              <span className="text-indigo-600 text-md font-semibold">Read More</span>

            <span className="text-gray-600 text-sm ml-2">
              {data.publishDate}{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
    </a>
    </Link>
  );
}
