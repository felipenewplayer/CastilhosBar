<<<<<<< HEAD
import { Link } from "./Link";
import { Login } from "./Login";

export const Banner = () => {
    return (
        <div className="w-full bg-black p-4 sm:p-6 md:p-10 lg:p-15 flex flex-col sm:flex-row justify-around items-center border-b border-gray-500/50 mb-10">
            <div className="flex flex-col sm:flex-row justify-around items-center w-full text-center">
                <Link ><a href="#">Menu</a></Link>
                <Link><a href="#">Sobre</a></Link>
                <Link><a href="#">Castrilhos Bar</a></Link>
                <Link><a href="#">Contato</a></Link>
            </div>
            <div className="mt-4 sm:mt-0">
                <Login />
            </div>
        </div>
    );
=======
import { Login } from "./pages/Login";

export const Banner = () => {
  return (
    <div className="bg-black p-4 sm:p-6 md:p-10 lg:p-15 flex flex-col sm:flex-row justify-between items-center border-b border-gray-500/50 mb-10">
      {/* Esse container ficará em coluna por padrão e em linha a partir de 'sm' */}
      <div className="flex flex-col sm:flex-row justify-between w-full text-center">
        <a className="text-white text-xl sm:text-3xl md:text-3xl" href="">
          Menu
        </a>
        <a className="text-white text-xl sm:text-3xl md:text-3xl" href="">
          Sobre
        </a>
        <a className="text-white text-3xl sm:text-5xl md:text-5xl" href="">
          Castilhos Bar
        </a>
        <a className="text-white text-xl sm:text-3xl md:text-3xl" href="">
          Contato
        </a>
      </div>
      <div className="mt-4 sm:mt-0">
        <Login />
      </div>
    </div>
  );
>>>>>>> 4b376c0e9c13010fa227cfa36ea85f480023ade9
};
