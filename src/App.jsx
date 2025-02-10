import { useEffect, useState } from 'react';
import './App.css';
import { Banner } from './assets/components/Banner';
import { Catalago } from './assets/components/Catalogo';
import axios from 'axios';

function App() {
  const [burguer, setBurguer] = useState([])

 useEffect(() => {
    axios.get("https://apicastilhobar-production.up.railway.app/")
        .then(response => {
          setBurguer(response.data);
        })
        .catch(error => {
          alert("Erro fecthing" + error);
        })
  }, [])

  return (
    <div className="w-full h-screen bg-black font-primary">
      <Banner />
      <div className="w-full mx-auto px-4">
        <Catalago burguer={burguer} />
      </div>
    </div>
  );
}

export default App;
