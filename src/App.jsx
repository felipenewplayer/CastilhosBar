import './App.css';
import { Banner } from './assets/components/Banner';
import { Catalago } from './assets/components/Catalogo';

function App() {
  const burguer = [
    { id: 1, nome: "HamburguerX", descricao: "4 queijos, salada, cheedar, bacon", price: 29.99 },
    { id: 2, nome: "HamburguerX", descricao: "4 queijos, salada, cheedar, bacon", price: 29.99 },
    { id: 3, nome: "HamburguerX", descricao: "4 queijos, salada, cheedar, bacon", price: 29.99 },
    { id: 4, nome: "HamburguerX", descricao: "4 queijos, salada, cheedar, bacon", price: 29.99 },
    { id: 5, nome: "HamburguerX", descricao: "4 queijos, salada, cheedar, bacon", price: 29.99 },
    { id: 6, nome: "HamburguerX", descricao: "4 queijos, salada, cheedar, bacon", price: 29.99 },
  ];

  return (
    <div className="w-full h-full bg-black font-primary">
      <Banner />
      <div className="w-full mx-auto max-w-[375px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1000px]">
        <Catalago burguers={burguer} />
      </div>
    </div>
  );
}

export default App;
