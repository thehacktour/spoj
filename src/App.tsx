import React, { useEffect, useState } from 'react';

function App() {

  const [piada, setPiada] = useState("")

  const gerarPiadaAleatoria = () => {
    const chamadaAPI = async () => {
      const response = await fetch("https://v2.jokeapi.dev/joke/Any")
      const data = await response.json()
      if(data.setup){
        setPiada(data.setup)
      }else{
        setPiada("Não foi encontrado uma piada!")
      }
    }
    chamadaAPI()
  }


  return (
    <div>
      <h1>Gerador de Piadas Aleatorias</h1>
      <button onClick={gerarPiadaAleatoria}>Gerar Piada</button>
      <h1>Piada do dia: {piada}</h1>
    </div>
  );
}

export default App;
