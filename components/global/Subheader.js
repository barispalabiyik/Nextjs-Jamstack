import React from "react";

export default function Subheader(props) {
  const { subHeaderTitle } = props;
  const { breadcrumbData } = props;
  return (
    <div>
      <div className="bg-indigo-600 h-24 flex flex-col justify-center items-center">
        <h1 className="text-white text-3xl uppercase">{subHeaderTitle}</h1>
        <ol class="list-reset flex text-white">
          <li>
            <a href="/" class="font-bold">
              Home
            </a>
          </li>
          <li>
            <span class="mx-2">/</span>
          </li>
          <li>
            <a href="/blog" class="font-bold">
              Blog
            </a>
          </li>
          <li>
            <span class="mx-2">/</span>
          </li>
          <li className="uppercase">{breadcrumbData}</li>
        </ol>
      </div>
    </div>
  );
}
