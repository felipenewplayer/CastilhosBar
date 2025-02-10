import { KeyRound, User } from "lucide-react"
import { Input } from "../Input"

export const LoginPage = () => {
    return (
        <section
            className="w-screen h-screen bg-black/95 flex justify-center sm:flex-row ">
            <div
                className=" bg-black/10 flex justify-around w-180 rounded-2xl flex-col items-center border border-gray-500 md:{max-w-xs} md:{max-h-xs} m-10 p-4 ">
                <h1
                    className="flex items-center text-2xl text-white/90 mt-4 sm:text-5xl">Que bom que você voltou!!</h1>
                <form
                    className=" w-full h-100 flex flex-col justify-center mt-10">
                    <label
                        className="flex justify-center ">
                        <User
                            className="w-10 h-10 mr-10 bg-amber-50/50 rounded-2xl p-0.7" />
                        <Input
                            type="text"
                            placeholder="Digite seu nome" />
                    </label>
                    <label
                        className="flex justify-center ">
                        <KeyRound
                            className="w-10 h-10 mr-10 bg-amber-50/50 rounded-2xl " />
                        <Input
                            type="text"
                            placeholder="Digite sua senha" />
                    </label>

                </form>
                <button
                    className="bg-orange-500 w-50 h-25 rounded-2xl text-4xl text-white/80 mb-10 hover:bg-orange-500/80 transition duration-300 cursor-pointer sm:w-xl md:w-xl">Login</button>
            </div>
        </section>
    )
}