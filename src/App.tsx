import React, { useState } from 'react';

function App() {

  const [piada, setPiada] = useState({ setup: "", delivery: "" })

  const gerarPiada = () => {
    const chamadaAPI = async () => {
      const chamada = await fetch("https://v2.jokeapi.dev/joke/Any")
      const data = await chamada.json() 

      if(data){
        const setupOficial = data.setup
        const deliveryOficial = data.delivery

        setPiada((information) => ({ ...information, setup: setupOficial, delivery: deliveryOficial }))
      }else{
        setPiada((information) => ({ ...information, setup: "Não foi encontrada uma piada", delivery: " " }))
      }
    }

    chamadaAPI()
  }

  return (
    <div>
      <h1>Gerador de Piadas Aleatorias</h1>

      <button onClick={gerarPiada}>Gerar Piadas</button>

      <h1>Setup: {piada.setup}</h1>
      <h1>Resposta: {piada.delivery}</h1>
    </div>
  );
}

export default App;
