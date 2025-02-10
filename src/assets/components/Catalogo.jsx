/* eslint-disable react/prop-types */
import { Burguer } from "./Burguer";

export const Catalago = ({ burguer }) => {
  return (  
    <div className="flex flex-wrap justify-center md:justify-center md:flex-wrap lg:flex-wrap  lg:justify-center ml-10">
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
