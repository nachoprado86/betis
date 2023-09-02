import { useState } from "react";
import Card from "./components/Card";
import './Vascos.css';

function Vascos () {
    const [card, setCard] = useState([]);

    const getCard= async () => {
      const response = await fetch('http://localhost:3333/api/vascos_en_el_betis');
      const data = await response.json();
      console.log(data);
      setCard (data);
    }
    return (
        <div>
            <h1>VASCOS EN EL BETIS.</h1>
            <div className="Vascos">
            {card.map((card) => (
        <Card key={card.id} card={card} />
      ))}
            </div>

        </div>
    );
}

export default Vascos;

        