import { KeyRound, Mail, User } from "lucide-react"
import { Input } from "../Input"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {z} from "zod";
import { useContext } from "react"
import { GloabalContext } from "../../context/GloabalContext"
export const SignUpPage = () => {
    const {setUser} = useContext(GloabalContext);

    const signUpSchema = z.object({
      name: z.string().min(1, { message: "O nome é obrigatório" }),
      email: z.string().email({ message: "Email inválido" }),
      password: z.string().min(6, { message: "A senha deve ter pelo menos 6 caracteres" }),
    }); 

    
    const navigate = useNavigate();
    
    const { register, handleSubmit, formState: { errors } } = useForm({resolver: zodResolver(signUpSchema),});


    const onSubmit = async (data) => {
        try {
            await axios.post("https://apicastilhobar-production.up.railway.app/signUp", data);
            setUser({ nome: data.name, email: data.email }); 
            alert("Cadastro realizado com sucesso!");
            navigate('/');
        }
        catch (error) {
            alert("Erro ao cadastrar.Tente novamente.", error);
        }
    };

  
    return (
        <section
            className="w-screen h-screen bg-black/95 flex justify-center sm:flex-row ">
            <div
                className=" bg-black/10 flex justify-around w-180 rounded-2xl flex-col items-center border border-gray-500 md:{max-w-xs} md:{max-h-xs} m-10 p-4 ">
                <h1
                    className="flex items-center text-5xl text-white/90 mt-4 sm:text-5xl">Cadastro!!</h1>
                <form
                    className=" w-full h-100 flex flex-col justify-evenly mt-10 items-center"
                    onSubmit={handleSubmit(onSubmit)}>
                    <label
                        className="flex justify-center  ">
                        <User
                            className="w-7 h-7 sm:w-10 sm:h-10 mr-10 p-2 bg-amber-50/50 rounded-2xl p-0.7" />
                        <Input
                            type="text"
                            placeholder="Digite seu nome..."
                            {...register("name", {required: "O nome é obrigatório!"})}
                            />
                    </label>
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                    <label
                        className="flex justify-center">
                        <Mail
                            className="w-7 h-7 sm:w-10 sm:h-10 mr-10 p-2 bg-amber-50/50 rounded-2xl  " />
                        <Input
                            type="email"
                            placeholder="Digite seu email..."
                            {...register("email", {required:"O email é obrigatório!"})}
                            />
                           
                    </label>
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    <label
                        className="flex justify-center ">
                        <KeyRound
                            className="w-7 h-7 sm:w-10 sm:h-10 mr-10 p-2 bg-amber-50/50 rounded-2xl " />
                        <Input
                            type="password"
                            placeholder="Digite sua senha..."
                            {...register("password", {required: "O password é obrigatório!"})}
                            />
                           
                    </label>
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                    <button
                        onClick={() => navigate()}
                        type="submit"
                        className="bg-orange-500  text-2xl rounded-2xl h-20 w-40 mt-10 p-5
                    sm:w-50 sm:h-25
                      text-white/80 hover:bg-orange-500/80 transition duration-300 cursor-pointer "

                    >Login</button>
                </form>

            </div>
        </section>
    )
}