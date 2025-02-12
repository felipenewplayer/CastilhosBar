import { useContext } from "react"
import { CarrinhoContext } from "../context/CarrinhoContext"

export const CarrinhoPanel = () =>{
    const{carrinho, showCart, setShowCart} = useContext(CarrinhoContext);
    return(
        <div
        className={` top-0 right-0  w-80 bg-gray-800  transform transition-all duration-300 ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <h2 className="text-white text-3xl mb-5">Carrinho</h2>
        {carrinho.length > 0 ? (
          carrinho.map((item) => (
            <div key={item.id} className="text-white mb-3">
              <p>{item.name}</p>
              <p>Quantidade: {item.quantidade}</p>
              <p>Preço: R$ {item.price * item.quantidade}</p>
            </div>
          ))
        ) : (
          <p className="text-white">O carrinho está vazio.</p>
        )}
        <button
          onClick={() => setShowCart(false)}
          className="mt-5 bg-red-500 text-white py-2 px-4 rounded-lg cusor-pointer"
        >
          Fechar Carrinho
        </button>
      </div>
    );
}