/* eslint-disable react/prop-types */

import { Paragraph } from "./Paragraph"

export const Burguer = ({ name, descricao, price }) => {


  return (
    <div >
      <h1 className="text-white text-3xl sm:text-3xl m-5 text-center">{name}</h1>
      <Paragraph >{descricao}</Paragraph>
      <Paragraph>{price}</Paragraph>
    </div >)
}






