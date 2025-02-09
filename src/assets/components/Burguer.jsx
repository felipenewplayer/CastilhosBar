<<<<<<< HEAD
/* eslint-disable react/prop-types */
export const Burguer = ({ nome, descricao, price }) => {
    return (
      <div className="bg-gray-900/30 m-4 p-4 sm:m-10 sm:p-10 rounded-3xl flex flex-col justify-between max-w-xs w-full">
        <p className="text-white text-xl sm:text-3xl p-2">{nome}</p>
        <p className="text-white text-base sm:text-2xl">{descricao}</p>
        <p className="text-white text-base sm:text-2xl">{price}</p>
        <div>
          <img className="w-full h-auto rounded-2xl" src="/img/burger.jpg" alt="cheese" />
        </div>
      </div>
    );
  };
  
=======
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
>>>>>>> 4b376c0e9c13010fa227cfa36ea85f480023ade9
