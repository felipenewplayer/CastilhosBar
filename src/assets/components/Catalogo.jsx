/* eslint-disable react/prop-types */
import { Burguer } from "./Burguer";

export const Catalago = ({ burguer }) => {
  return (
    <div className="
    w-full flex justify-center flex-wrap 
    sm:w-full sm-justify-center
    md:w-full md:justify-center
    lg:flex-wrap  lg:justify-center 
    xl:flex-wrap  xl:justify-center xl:w-full
    2xl:flex-wrap 2xl:justify-center 2xl:h-full"
    >
      {burguer.map((burguer) => (
        <Burguer
          key={burguer.id}
          name={burguer.name}
          descricao={burguer.descricao}
          price={`R$ ${burguer.price}`}
        />
      ))}

    </div >
  );
}
