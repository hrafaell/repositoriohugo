import Image from "next/image"
import React from "react";
import { DiJsBadge,DiReact } from 'react-icons/di';
import { SiRedux,SiTailwindcss } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaSass } from 'react-icons/fa';
import { AiFillCaretRight } from 'react-icons/ai';

import Perfil from "../../public/assets/perfil.png";
import github from "../../public/assets/git.png"

import { Link, Element } from "react-scroll";

const About = () => {
  return (
    <Element name="apresentação">
      <div className="bg-slate-900 flex flex-col items-center   justify-center" >
      <p className="flex justify-center font-bold uppercase   text-2xl md:text-4xl tracking-widest   mb-10  text-purple-600">
          Apresentação
        </p>
        <div className="flex  justify-center items-center max-w-[1240px]  ">
          
          <div className=" rounded-xl flex gap-2 flex-col md:flex-row md:space-x-6 md:space-y-0 justify-between ">
            <div className=" md:h-1/2 md:w-1/2 flex items-center justify-center">
              <Image src={Perfil} height={400} width={400} />
            </div>
            <div className="h-1/2  w-full md:w-1/2 space-y-5 py-4  font-mono ">
              <h1 className="text-2xl tracking-wider "></h1>
              <p className="h-1/3 px-8 text-white">
                Eu sou Hugo, um desenvolvedor Front-end autodidata, moro em São
                Bernardo do Campo, São Paulo. Sou casado e pai de dois filhos.
                Venho estudando Front-end há um ano e meio. Acredito que já
                possuo conhecimentos suficientes para contribuir como
                desenvolvedor Junior. Estou ansioso para trabalhar em projetos
                que desafiem minhas habilidades e me permitam aprender e crescer
                como desenvolvedor Front-end. Se você estiver interessado em
                trabalhar comigo, por favor, entre em contato. Seria um prazer
                colaborar com sua equipe e contribuir para o sucesso do seu
                projeto.
              </p>
              <hr />
              <p className="text-white px-8">
                Algumas tecnologias que eu venho trabalhando
                recentemente :
              </p>
              <div className="text-white flex flex-row items-center justify-around gap-6">
                <ul>
                  <li className="flex items-center">
                  <DiJsBadge className="text-white mr-2"/> Javascript
                  </li>
                  <li className="flex items-center">
                  <DiReact className="text-white mr-2"/> Reactjs
                  </li>
                  <li className="flex items-center">
                  <SiRedux className="text-white mr-2"/> Redux
                  </li>
                  <li className="flex items-center">
                  <SiTailwindcss className="text-white mr-2"/> Tailwind
                  </li>
                  <li className="flex items-center">
                  <TbBrandNextjs className="text-white mr-2"/> NextJs
                  </li>
                  <li className="flex items-center">
                  <FaSass className="text-white mr-2"/> Sass
                  </li>
                </ul>
                <ul>
                <li className="flex items-center">
                  <AiFillCaretRight className="text-white mr-2"/> Node
                  </li>
            
                <li className="flex items-center">
                  <AiFillCaretRight className="text-white mr-2"/> Express
                  </li>
                <li className="flex items-center">
                  <AiFillCaretRight className="text-white mr-2"/> Github
                  </li>
                <li className="flex items-center">
                  <AiFillCaretRight className="text-white mr-2"/> MateriaUi
                  </li>
                <li className="flex items-center">
                  <AiFillCaretRight className="text-white mr-2"/> Style Components
                  </li>
                <li className="flex items-center">
                  <AiFillCaretRight className="text-white mr-2"/> API Rest
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-5 my-6" data-aos="flip-right" >
          <Image src={github} alt="" width={800} height={200} />
        </div>
      </div>
    </Element>
  );
};

export default About;
