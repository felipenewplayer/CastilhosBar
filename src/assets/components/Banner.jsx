import { useContext } from "react";
import { Link } from "./Link";
import { Login } from "./Login";
import { SignUp } from "./SignUp";
import { GloabalContext } from "../context/GloabalContext";

export const Banner = () => {
    const { user, setUser } = useContext(GloabalContext);

    const handleLogout = () => {
        setUser(null);
    };

    return (
        <div className="w-full bg-black p-4 sm:p-6 md:p-10 lg:p-15 flex flex-col sm:flex-row justify-around items-center border-b border-gray-500/50 mb-4">
            <div className="flex flex-col sm:flex-row justify-around items-center w-full text-center">
                <Link href="#">Menu</Link>
                <Link href="#">Sobre</Link>
                <Link href="#">Castilhos Bar</Link>
                <div className="sm:flex-row">
                    <a href="#"><img className="w-[20px] sm:w-[30px] 2xl:w-[30px]" src="/img/instagram.png" alt="instagram" /></a>
                    <p className="text-orange-500/80 text-xl sm:text-1xl transition duration-700 ease-linear hover:text-orange-500/80 cursor-pointer">
                        Contatos
                    </p>
                </div>
            </div>

            <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row items-center">
                {user ? (
                    <div className="flex items-center gap-4">
                        <p className="text-white text-xl">Bem-vindo, {user.nome}!</p>
                        <button 
                              onClick={handleLogout} 
                            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300 cursor-pointer"
                        >
                            Sair
                        </button>
                    </div>
                ) : (
                    <div className="flex items-center gap-4">
                        <Login />
                        <SignUp />
                    </div>
                )}
            </div>
        </div>
    );
};
