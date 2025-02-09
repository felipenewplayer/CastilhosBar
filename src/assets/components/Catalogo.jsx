import { Burguer } from "./Burguer";

/* eslint-disable react/prop-types */
export const Catalago = ({ burguers }) => {
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
};
