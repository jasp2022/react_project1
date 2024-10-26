import React from 'react';

function Saludo(Props) {
  return (
    <div className='saludo'>
        <h1>¡Hola, {Props.nombre}!</h1>
        <h2>Bienvenido a React</h2>

    </div>
  );
}

export default Saludo;