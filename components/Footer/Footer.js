import react from "react";
import {
  FaFacebook,
  FaFacebookSquare,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className=" w-full fixed bottom-0 mx-auto py-8 px-8 grid lg:grid-cols-3 gap-8 bg-slate-900 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]"> React.</h1>
        <p className="py-2  text-black font-bold">Teste do componente</p>
        <div className="flex md:w-[75%] my-6 justify-between">
        <a 
                href="https://www.instagram.com/hugocotonet/" 
                target="_blank"
                rel='nonreferrer'
                >
          <FaInstagram size={30} />
                  </a>


          <FaLinkedin size={30}/>
          <FaGithub size={30}/>
          <FaFacebookSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-around mt-6 ">
            <div>
                <h6 className="font-medium text-gray-400 text-bold " >Solutions</h6>
                <ul className="cursor-pointer">
                    <li className="py-2 text-sm  hover:text-blue-400 " >Marketing</li>
                    <li className="py-2 text-sm   hover:text-blue-400 "  >Commerce</li>
                    <li className="py-2 text-sm  hover:text-blue-400 "  >Analitics</li>
                    <li className="py-2 text-sm  hover:text-blue-400 "  >Insights</li>
                </ul>
            </div>
            <div>
            <h6 className="font-medium text-gray-400 " >Suport</h6>
            <ul className="cursor-pointer">
                    <li className="py-2 text-sm  hover:text-blue-400" >Marketing</li>
                    <li className="py-2 text-sm  hover:text-blue-400"  >Commerce</li>
                    <li className="py-2 text-sm  hover:text-blue-400"  >Analitics</li>
                    <li className="py-2 text-sm  hover:text-blue-400"  >Insights</li>
                </ul>
            </div>
            <div>
            <h6 className="font-medium text-gray-400 " >Contato</h6>
            <ul className="cursor-pointer">
                    <li className="py-2 text-sm  hover:text-blue-400" >Marketing</li>
                    <li className="py-2 text-sm hover:text-blue-400"  >Commerce</li>
                    <li className="py-2 text-sm  hover:text-blue-400"  >Analitics</li>
                    <li className="py-2 text-sm  hover:text-blue-400"  >Insights</li>
                </ul>
            </div>

      </div>
    </div>
  );
}
