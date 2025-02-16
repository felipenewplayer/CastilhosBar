/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const GloabalContext = createContext();

export const ContextProvider = ({children}) => {
    const [carrinho, setCarrinho] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const[user, setUser] = useState(null)
    return (
        <GloabalContext.Provider value={{ carrinho, setCarrinho,showCart,setShowCart, user, setUser }}>
            {children}
        </GloabalContext.Provider>
    )
}