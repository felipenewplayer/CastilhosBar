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
  }