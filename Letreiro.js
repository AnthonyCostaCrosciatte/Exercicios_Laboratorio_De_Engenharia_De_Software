import React, { useState, useEffect } from 'react';

function Letreiro() {
  const [mensagem, setMensagem] = useState('Olá, seja bem vindo...');

  useEffect(() => {
    const alternarMensagem = () => {
      setMensagem(prevMensagem =>
        prevMensagem === 'Olá, seja bem vindo...'
          ? 'FATEC de Presidente Prudente!'
          : 'Olá, seja bem vindo...'
      );
    };

    const intervalId = setInterval(alternarMensagem, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ fontSize: '24px', textAlign: 'center' }}>
      <p>{mensagem}</p>
    </div>
  );
}

export default Letreiro;
