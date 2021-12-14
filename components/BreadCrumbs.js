/* This example requires Tailwind CSS v2.0+ */
import { HomeIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'




export default function BreadCrumbs( {categoryData} ) {
    const router = useRouter();
  return (
      console.log(router.pathname.split("/")[1]),
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="bg-white rounded-md shadow px-6 flex space-x-4">
        <li className="flex">
          <div className="flex items-center">
            <a href="/" className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Anasayfa</span>
            </a>
          </div>
        </li>
          <li className="flex">
            <div className="flex items-center">
              <svg
                className="flex-shrink-0 w-6 h-full text-gray-200"
                viewBox="0 0 24 44"
                preserveAspectRatio="none"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
              </svg>
              <a
                href={`/${router.pathname.split("/")[1]}`}
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700 capitalize"
              >
                {router.pathname.split("/")[1]}
              </a>
            </div>
          </li>

          <li className="flex">
            <div className="flex items-center">
              <svg
                className="flex-shrink-0 w-6 h-full text-gray-200"
                viewBox="0 0 24 44"
                preserveAspectRatio="none"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
              </svg>
              <a
                href={`/${router.pathname.split("/")[1]}/${categoryData}`}
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700 capitalize"
              >
                {categoryData}
              </a>
            </div>
          </li>
      </ol>
    </nav>
  )
}
