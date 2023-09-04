import React, { useState } from 'react';
import axios from 'axios';
import "../styles/button.css"

function ButtonComponente() {
  const [textoDaAPI, setTextoDaAPI] = useState('');

  const chamarAPI = async () => {
    try {
      const response = await axios.get('https://api.kanye.rest'); // Substitua pela URL da sua API
      const data = response.data;
      setTextoDaAPI(data.quote); // Supondo que a API retorna um objeto com uma propriedade 'quote'
    } catch (error) {
      console.error('Erro ao chamar a API:', error);
    }
  };

  return (
    <div className="text_content">
      <p className="kanye_text">{textoDaAPI}</p>
      <button onClick={chamarAPI}>T R Y</button>
    </div>
  );
}

export default ButtonComponente;

