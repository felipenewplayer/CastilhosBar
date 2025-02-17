import { useEffect, useState } from 'react';
import './App.css';
import { Banner } from './assets/components/Banner';
import { Catalago } from './assets/components/Catalogo';
import axios from 'axios';

function App() {
  const [burguer, setBurguer] = useState([])

  useEffect(() => {
    axios.get("https://castilhos-9k8g5x1g2-felipenewplayers-projects.vercel.app/")
      .then(response => {
        setBurguer(response.data);
      })
      .catch(error => {
       
        alert("Erro fecthing" + error);
      })
  }, [])

  return (
    
    <div className=" bg-black font-primary">
      <Banner />
      <div className="w-full">
        <Catalago burguer={burguer}
      /></div>

    </div>
  );
}

export default App;
