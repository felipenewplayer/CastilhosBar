import { Login } from "./pages/Login"

export const Banner = () => {
    return(
        <div className="bg-black p-15 flex justify-around border-b border-gray-500/50 mb-10">
            <a className="text-white text-3xl " href="" >Menu</a>
            <a className="text-white text-3xl " href="">Sobre</a>    
            <a className="text-white text-5xl" href="">Castilhos Bar</a>
            <a className="text-white text-3xl" href="">Contato</a>
            <Login/>
        </div>
    )
}