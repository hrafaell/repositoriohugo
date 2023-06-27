import Image from "next/image";
import React, { useState } from "react";
import Profile from "../../public/assets/perfil.png";
import Verificado from "../../public/assets/verificado.png";
import {
  AiOutlineClose,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMenu,
} from "react-icons/ai";
import { Link, Element } from "react-scroll";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed w-full h-24 z-10 bg-slate-900 cursor-pointer">
      <div className="flex justify-center items-center h-full w-full px-4 2xl:px-16 ">
        <div>
          <Link
            className="text-white  flex flex-row items-center  space-x-2 cursor-pointer"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            <Image
              className="ml-2"
              width={40}
              height={40}
              src={Profile}
              alt="Logo"
              priority
            />
            <h2 className="text-xl font-bold hover:text-purple-600 text-white">
              Hugo Rafael
            </h2>
            <Image
              className="w-5 h-5 ml-2"
              src={Verificado}
              alt="Logo"
              priority
            />
          </Link>
        </div>
        <div className="hidden md:flex">
          <ul className="hidden md:flex">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              <li className="ml-5 uppercase text-sm 2xl:text-base text-white font-bold pl-10 hover:text-purple-600">
                <span className="text-purple-600 px-2">01. </span> Home
              </li>
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              <li className="ml-10 uppercase text-sm 2xl:text-base text-white font-bold hover:text-purple-600">
                <span className="text-purple-600 px-2">02. </span>
                Projetos
              </li>
            </Link>
            <Link
              to="contato"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              <li className="ml-10 uppercase text-sm 2xl:text-base text-white font-bold hover:text-purple-600">
                <span className="text-purple-600 px-2">03. </span>
                Contato
              </li>
            </Link>
            <Link
              to="apresentação"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              <li className="ml-10 uppercase text-sm 2xl:text-base text-white font-bold hover:text-purple-600">
                <span className="text-purple-600 px-2">04. </span>
               Apresentação
              </li>
            </Link>
            <a href="https://drive.google.com/file/d/1s1vr9eA6twg9XEKt8C1rpZ6PESpx2Goy/view?usp=sharing">
            <button className="mx-5 uppercase bg-none text-sm 2xl:text-base border border-purple-600 hover:font-bold text-purple-600 font-bold hover:text-white px-4 rounded shadow hover:bg-purple-600 focus:text-gray-200 transition duration-300 ease-in-out">
              Download CV
            </button>
            </a>
          </ul>
        </div>
        <div
          onClick={handleNav}
          className="md:hidden text-white cursor-pointer pl-24"
        >
          <AiOutlineMenu size={25} />
        </div>
        <div
          className={
            menuOpen
              ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-end">
            <div onClick={handleNav} className="cursor-pointer">
              <AiOutlineClose size={25} className="text-white" />
            </div>
          </div>
          <div>
            <Link
              className="flex items-center space-x-2"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              <Image
                className="ml-2"
                width={40}
                height={40}
                src={Profile}
                alt="Logo"
              />
              <h2 className="text-xs md:text-2xl font-bold hover:text-purple-600 text-black">
                Hugo Rafael
              </h2>
              <Image className="w-5 h-5 ml-2" src={Verificado} alt="Logo" />
            </Link>
          </div>
          <div className="flex-col py-4 cursor-pointer">
            <ul>
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
                onClick={() => setMenuOpen(false)}
              >
                <li className="py-4  text-black  hover:text-purple-600 hover:font-bold">
                  01 Home
                </li>
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
                onClick={() => setMenuOpen(false)}
              >
                <li className="py-4  text-black  hover:text-purple-600 hover:font-bold ">
                  02 Projetos
                </li>
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
                onClick={() => setMenuOpen(false)}
              >
                <li className="py-4  text-black  hover:text-purple-600 hover:font-bold">
                  03 Contato
                </li>
              </Link>
            </ul>
          </div>
          <div className="flex  pt-10 flex-row gap-10 pb-10 xs:justify-center items-center sm:hidden">
            <AiOutlineInstagram
              size={30}
              className="cursor-pointer text-black hover:text-purple-600 hover:font-bold"
            />
            <AiOutlineLinkedin
              size={30}
              className="cursor-pointer text-black hover:text-purple-600 hover:font-bold"
            />
            <AiOutlineGithub
              size={30}
              className="cursor-pointer text-black hover:text-purple-600 hover:font-bold"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
