import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";


const Links = () => {
  return (
    <div className="w-40 fixed bottom-0 left-4 right-auto z-10 hidden 2xl:block ">
    <ul className="flex flex-col align-center items-center  text-white m-0 p-0 list-none ">
      <li>
        <a href="https://www.linkedin.com/in/hugorafaell/">
          <FaLinkedin
            size={30}
            className="hover:text-purple-600 hover:scale-110 transition-all duration-100"
          />
        </a>
      </li>
      <li className="py-5 hover:text-purple-600 hover:scale-110 transition-all duration-100">
        <a href="https://www.instagram.com/hugocotonet/">
          <FaInstagram size={30} />
        </a>
      </li>
      <li className="teste hover:text-purple-600 hover:scale-110 transition-all duration-100">
        <a href="https://github.com/hugorafaelll">
          <FaGithub size={30} className="mb-10" />
        </a>
      </li>
    </ul>
  </div>
  )
}

export default Links