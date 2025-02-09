import { Burguer } from "./Burguer";

/* eslint-disable react/prop-types */
export const Catalago = ({ burguers }) => {
<<<<<<< HEAD
  return (
    <section className="p-4">
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4">
        {burguers.map((burguer) => (
          <Burguer
            key={burguer.id}
            nome={burguer.nome}
            descricao={burguer.descricao}
            price={`R$ ${burguer.price}`}
          />
        ))}
      </div>
    </section>
  );
=======
    return (
        <section>
            <div className="flex flex-col sm:flex-row justify-center">
                {burguers.map((burguer) => (
                    <Burguer
                        key={burguer.id}
                        nome={burguer.nome}
                        descricao={burguer.descricao}
                        price={`R$ ${burguer.price}`}
                    />
                ))}
            </div>
        </section>
    );
>>>>>>> 4b376c0e9c13010fa227cfa36ea85f480023ade9
};
