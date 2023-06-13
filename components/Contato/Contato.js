import React, { useRef } from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import emailjs from 'emailjs-com';

const Contato = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('templateGeral', 'template_dx91xzf', form.current, '2tTObyZcNYsuAalJ4')
      .then((result) => {
        alert('mensagem enviada com sucesso');
      }, (error) => {
        alert(error.message);
      });

    e.target.reset();
  };

  return (
    <div className="antialiased bg-slate-900" id="contato">
      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="bg-slate-500 w-full  max-w-6xl p-8 mb-0 rounded-xl shadow-xl text-white ">
          <div className="flex flex-col md:flex-row md:space-x-6 md:space-y-0 justify-between ">
            <div className="md:w-1/2 space-y-4 md:space-y-12  " data-aos="fade-up-right">
              <h1 className="flex justify-center items-center font-bold uppercase text:2xl md:text-4xl tracking-wide">Contato</h1>
              <p className="pt-2 text-slate-200 text-sm md:text-xl tracking-tighter">
                Estou ansioso para ajudá-lo em tudo o que precisar. Por favor, preencha o formulário de contato com suas informações e uma breve descrição de suas necessidades.
              </p>
              <p className="pt-2 text-slate-200  text-sm   md:text-xl  tracking-tighter">
                Além disso, sinta-se à vontade para entrar em contato comigo por telefone, e-mail ou whatsapp.
                Estou sempre disponíveis para ajudá-lo! Obrigado por escolher meus serviços e estou ansiosos para trabalharmos juntos.
              </p>
              <div className="flex space-x-4 items-center  justify-center ">
                <FaWhatsapp className="text-slate-300 " size={30} />
                <FaLinkedin className="text-slate-300 " size={30} />
                <FaGithub className="text-slate-300 " size={30} />
                <FaInstagram className="text-slate-300 }" size={30} />
              </div>
            </div>

            <div className="bg-slate-200 md:w-1/2  rounded-xl shadown-lg p-8 text-gray-600 my-2" data-aos="zoom-in">
              <form onSubmit={sendEmail} className="flex flex-col space-y-4" ref={form}>
                <div>
                  <label htmlFor="nome" className="text-sm " placeholder="Nome">
                    Nome
                  </label>
                  <input
                    type="text"
                    placeholder="Seu Nome"
                    name="name"
                    className="ring-1 mt-2 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-slate-600"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm" placeholder="Email">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Seu Email"
                    name="email"
                    className="ring-1 mt-2 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-slate-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="mensagem"
                    className="text-sm  flex items-center justify-center"
                    placeholder="Message"
                  >
                    Mensagem
                  </label>
                  <textarea
                    rows={4}
                    type="email"
                    placeholder=""
                    name="message"
                    className="ring-1 mt-2 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-slate-600"
                  />
                </div>
                <button className="inline-block bg-none border border-slate-500 text-black font-bold self-end  hover:bg-slate-500 hover:text-white rounded-lg px-3 py-2">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;
