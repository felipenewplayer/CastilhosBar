/* eslint-disable react/prop-types */
import { Burguer } from "./Burguer";

export const Catalago = ({ burguer }) => {
  return (
    <div className="w-full flex flex-wrap ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-75 mt-10 mb-10 ">
      {burguer.map((burguer) => (
        <Burguer
          key={burguer.id}
          name={burguer.name}
          descricao={burguer.descricao}
          price={`R$ ${burguer.price}`}
        />
      ))}
    </div>
      </div >
  );}
