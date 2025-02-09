import { Login } from "./pages/Login";

export const Banner = () => {
    return(
        <div className="bg-black p-4 sm:p-6 md:p-10 lg:p-15 flex flex-col sm:flex-row justify-between items-center border-b border-gray-500/50 mb-10">
            <div className="flex flex-row sm:flex-grow justify-between sm:w-auto w-full text-center">
                <a className="text-white text-xl sm:text-3xl md:text-3xl" href="">Menu</a>
                <a className="text-white text-xl sm:text-3xl md:text-3xl" href="">Sobre</a>
                <a className="text-white text-3xl sm:text-5xl md:text-5xl" href="">Castilhos Bar</a>
                <a className="text-white text-xl sm:text-3xl md:text-3xl" href="">Contato</a>
            </div>
            <div className="mt-4 sm:mt-0">
                <Login />
            </div>
        </div>
    )
}
