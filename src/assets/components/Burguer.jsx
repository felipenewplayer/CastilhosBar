
export const Burguer = (burguers) => {
    return (
        <div className="bg-gray-900/30  m-10 p-10 rounded-3xl h-150 w-150 flex flex-col justify-between ">
            <p className="text-white text-3xl p-2">{burguers.nome}</p>
            <p className="text-white text-2xl">{burguers.descricao}</p>
            <p className="text-white text-2xl">{burguers.price}</p>
            <div>
                <img className="h-76 w-300 rounded-2xl" src= "/img/burger.jpg" alt="cheese" />
            </div>

        </div>
    )
}