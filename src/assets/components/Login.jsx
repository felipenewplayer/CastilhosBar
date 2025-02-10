import { useNavigate } from "react-router-dom"

export const Login = () => {
    const navigate = useNavigate();

    return (
        <button
            className="bg-purple-100 h-10 rounded-md hover:scale-120 transition duration-700 ease-linear hover:bg-orange-600 "
            onClick={() => navigate('/login')}
        >
            <span className="text-4xl text-black p-10 pt-10 hover:text-white" >Login</span>
        </button>
    )
}   