import { useNavigate } from "react-router-dom"

export const Login = () => {
    const navigate = useNavigate();

    return (
        <button
            className="bg-orange-500/80  rounded-md pt-2 pb-2 cursor-pointer "
            onClick={() => navigate('/login')}
        >
            <span className="text-4xl text-black p-10 pt-10 hover:text-white transition duration-700" >Login</span>
        </button>
    )
}   