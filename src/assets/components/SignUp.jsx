import { useNavigate } from "react-router-dom"

export const SignUp = () => {
    const navigate = useNavigate();

    return (    
        <button
            className="bg-orange-500/80  rounded-md pt-2 pb-2 cursor-pointer m-2 xl:w-[150px]" 
            onClick={() => navigate('/signUp')}
        >
            <span className="text-[23px] xl:text-[20px] xl:p-[10px]  text-black p-3 hover:text-white transition duration-700" >Sign Up</span>
        </button>
    )
}   