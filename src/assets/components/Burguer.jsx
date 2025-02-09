export const Burguer = (burguers) => {
  return (
    <div className="bg-gray-900/30 m-4 p-4 sm:m-10 sm:p-10 rounded-3xl flex flex-col justify-between max-w-[300px]">
      <p className="text-white text-xl sm:text-3xl p-2">{burguers.nome}</p>
      <p className="text-white text-lg sm:text-2xl">{burguers.descricao}</p>
      <p className="text-white text-lg sm:text-2xl">{burguers.price}</p>
      <div>
        <img
          className="w-full h-auto rounded-2xl"
          src="/img/burger.jpg"
          alt="cheese"
        />
      </div>
    </div>
  );
};
