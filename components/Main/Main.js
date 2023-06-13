import React from "react";

import Image from "next/image";
import Projeto1 from "../../public/assets/project-4.png";
import Portifolio from "../../public/assets/1projeto.png";
import Ecomerce from "../../public/assets/project-2.png";
import Paises from "../../public/assets/project-3.png";
import Ecomerce2 from "../../public/assets/project-5.png";
import Scroll from "../Buttons/scrollDown/Scroll.js";

const Main = () => {
  return (
    <div id="home" className="w-full  h-screen text-center font-mono">
      <div className="max-w-[1240px]   h-full mx-auto p-2 flex justify-center items-center">
        <div className="flex flex-col md:flex-row gap-5 items-center " data-aos="fade-right">
          <div className="flex flex-col items-center h-full w-full">
            <div className="bg-slate-600  h-1/3 bg-opacity-30 w-full rounded-xl flex flex-col items-start">
              <p className="  text-lg md:text-xl lg:text-2xl xl:text-3xl  text-purple-600 font-extrabold tracking-wider">
                Olá, eu sou Hugo
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl px-2 text-white font-bold">
                Eu crio websites.
              </h1>
              <p className="py-1 max-w-[90%] text-base md:text-lg lg:text-xl xl:text-2xl text-white mx-auto">
                Eu sou um front-end web developer, Meu objetivo é criar páginas
                front-end responsivas e aplicações web.
              </p>
            </div>
          </div>

          <div class="grid my-5 md:my-0 grid-flow-col py-5 grid-rows-2 grid-cols-3 gap-4 w-2/3 h-1/3" data-aos="fade-left">
            <div class="transform scale-150 -rotate-6  ">
              <Image src={Projeto1} alt="" loading="lazy" />
            </div>
            <div class="col-start-3 transform scale-75 rotate-6 translate-x-2 translate-y-15">
              <Image src={Ecomerce} alt="" loading="lazy" />
            </div>
            <div class="transform scale-150 translate-y-11">
              <Image src={Paises} alt="" loading="lazy" />
            </div>
            <div class="transform scale-125 translate-y-24">
              <Image src={Ecomerce2} alt="" loading="lazy" />
            </div>
            <div class="row-start-1 col-start-2 col-span-2 transform translate-x-2 translate-y-4">
              <Image src={Portifolio} alt="" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
