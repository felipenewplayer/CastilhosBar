/* eslint-disable react/prop-types */

import { Paragraph } from "./Paragraph"

export const Burguer = ({ name, descricao, price }) => {


  return (
    <div className="transition-transform transform hover:scale-103 duration-500 border border-gray-50/50 rounded-2xl  m-10">
      <h1 className="text-white text-3xl sm:text-3xl m-5 text-center">{name}</h1>
      <Paragraph >{descricao}</Paragraph>
      <Paragraph>{price}</Paragraph>

      <a
        className=" text-white text-xl " href="#">
        <button
          className="bg-green-500/70 rounded-[6px] w-[120px] pt-3 pb-3 ml-2 transition duration-400 hover:bg-green-400/70 cursor-pointer">Pedir
        </button>
      </a>

      <div>
        <img className="
        w-full h-[300px]
        sm:h-[320px] rounded-b-3xl
        md:h-[360px]
        lg:h-[380px]
        2xl:h-[400px]" src="/img/burger.jpg" alt="cheese" />
      </div>
    </div >)
}






