import React from 'react'
import Link from 'next/link'

const RepoButton = () => {
  return (
  
    <div className="py-2 flex justify-center items-center ">
    <Link href="https://github.com/hugorafaelll">
      <button className="mx-5 uppercase   bg-none text-sm 2xl:text-base border border-purple-600  hover:font-bold text-purple-600 font-bold hover:text-white px-4 rounded shadow  hover:bg-purple-600 focus:text-gray-200 transition duration-300 ease-in-out ">
        Ver Mais
      </button>
    </Link>
  </div>
  )
}

export default RepoButton