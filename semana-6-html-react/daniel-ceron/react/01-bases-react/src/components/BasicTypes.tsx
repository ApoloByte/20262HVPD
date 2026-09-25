import React from 'react';

export const BasicTypes = () => {
  const name: string = 'Víctor';
  const age: number = 28;
  const isActive: boolean = true;

  return (
    <div>
      <h2>BasicTypes</h2>
      <p>Nombre: {name}</p>
      <p>Edad: {age}</p>
      <p>Activo: {isActive ? 'Sí' : 'No'}</p>
    </div>
  );
};