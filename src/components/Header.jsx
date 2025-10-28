// src/components/Header.jsx
import React from 'react';

function Header({ corPrincipal, corSecundaria }) {
  const headerStyle = {
    backgroundColor: corPrincipal,
    borderBottom: `5px solid ${corSecundaria}`
  };

  return (
    <header className="p-4 text-white text-center" style={headerStyle}>
      <h1 className="display-4">ReViva</h1>
      <p className="lead">Transformando e renovando o nosso presente, pelo bem do amanhã</p>
    </header>
  );
}
export default Header;
