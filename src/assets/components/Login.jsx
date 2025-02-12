import { useNavigate } from "react-router-dom"

export const Login = () => {
    const navigate = useNavigate();

    return (
        <button
            className="bg-orange-500/80  rounded-md pt-2 pb-2 cursor-pointer m-2"
            onClick={() => navigate('/login')}
        >
            <span 
            className="text-2xl sm:text-[18px] sm:p-[12px]  xl:text-[22px] xl:p-[12px]  text-black p-3 hover:text-white transition duration-700">Login</span>
        </button>
    )
}   