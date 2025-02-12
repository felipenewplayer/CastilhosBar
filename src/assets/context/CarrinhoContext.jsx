/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({children}) => {
    const [carrinho, setCarrinho] = useState([]);
    const [showCart, setShowCart] = useState(false);
    return (
        <CarrinhoContext.Provider value={{ carrinho, setCarrinho,showCart,setShowCart }}>
            {children}
        </CarrinhoContext.Provider>
    )
}