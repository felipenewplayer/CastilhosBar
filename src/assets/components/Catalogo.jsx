/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Burguer } from "./Burguer";
import { GloabalContext } from "../context/GloabalContext";

export const Catalago = ({ burguer }) => {
  const { carrinho, setCarrinho, showCart, setShowCart } = useContext(GloabalContext);

  function addBuguer(novoProduto) {
    console.log(novoProduto);
    if (!novoProduto || !novoProduto.id) return;

    if (!Array.isArray(carrinho)) {
      console.error("Carrinho não é um array.");
      return;
    }

    const temOBurguer = carrinho.some((itemDoCarrinho) => itemDoCarrinho.id === novoProduto.id);

    if (!temOBurguer) {
      novoProduto.quantidade = 1;
      setCarrinho((carrinhoAnterior) => [
        ...carrinhoAnterior,
        novoProduto,
      ]);
    } else {
      setCarrinho((carrinhoAnterior) =>
        carrinhoAnterior.map((itemDoCarrinho) => {
          if (itemDoCarrinho.id === novoProduto.id) {
            itemDoCarrinho.quantidade += 1;
          }
          return itemDoCarrinho;
        })
      );
    }

    setShowCart(true);  // Exibe o carrinho ao adicionar um item
  }

  return (
    <div className="w-full flex justify-center flex-wrap 
    sm:w-full sm-justify-center
     md:w-full md:justify-center 
     lg:flex-wrap lg:justify-center xl:flex-wrap 
     xl:justify-center xl:w-full 
     2xl:flex-wrap 2xl:justify-center 2xl:h-full">
      {burguer.map((burguer) => (
        <div
          className="transition-transform transform hover:scale-103 duration-500 border border-gray-50/50 rounded-2xl m-5 cursor-pointer"
          key={burguer.id}
        >
          <Burguer
            name={burguer.name}
            descricao={burguer.descricao}
            price={`R$ ${burguer.price}`}
          />
          <button
            onClick={() => addBuguer(burguer)}
            className="bg-green-500/70 rounded-[6px] w-[120px] pt-3 pb-3 ml-2 transition duration-400 hover:bg-green-400/70 cursor-pointer"
          >
            Pedir
          </button>
          <img
            className="w-full h-[300px] sm:h-[320px] rounded-b-3xl md:h-[360px] lg:h-[380px] 2xl:h-[400px]"
            src="/img/burger.jpg"
            alt="cheese"
          />
        </div>
      ))}
      {showCart && (
        <div
          className="fixed right-0 top-0 w-1/3 bg-gray-800 text-white p-4"
          style={{ height: "100vh", transition: "transform 0.3s ease-out" }}
        >
          <h2 className="text-xl font-bold">Carrinho</h2>
          <ul>
            {carrinho.map((item) => (
              <li key={item.id} className="mb-4">
                <p>{item.name}</p>
                <p>Quantidade: {item.quantidade}</p>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setShowCart(false)}
            className="bg-red-500 mt-4 p-2 rounded"
          >
            Fechar Carrinho
          </button>
        </div>
      )}
    </div>
  );
};
