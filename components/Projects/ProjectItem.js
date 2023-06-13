import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ title, backgroundGif, toolsUsed, urlDeploy }) => {
  return (
    <div className="my-10 mx-auto rounded-xl "   data-aos="fade-up" >
      <Link href={urlDeploy} target="_blank" rel="noopener noreferrer">
        <div className="flex flex-col md:flex-row gap-6 ">
          <div className="flex flex-col  justify-between  mb-5 md:w-1/2  ">
            <h1
              className="font-black tracking-wide mb-4 text-2xl text-white  " >
              {title}
            </h1>
            <p className="text-white">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 
               will uncover many web sites still in their infancy. Various
              versions have evolved over the years, sometimes by accident,
              sometimes on purpose
            </p>
            <div className="flex justify-around py-4 ">
              <button className="text-white border rounded-xl p-2 font-bold hover:border-purple-600 hover:text-purple-600  ">
                Deploy Live
              </button>
              <button className="text-white border rounded-xl p-2 font-bold  hover:border-purple-600 hover:text-purple-600  ">
                Repositorio
              </button>
            </div>
          </div>
          <div className="h-1/2 flex flex-wrap">
            <Image
              width={600}
              height={600}
              className=" object-cover  z-15 transition duration-300 hover:scale-105 relative"
              src={backgroundGif}
              alt=""
            />
          </div>
          <div></div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectItem;
