// src/components/TutorialCard.jsx
import React from 'react';

const badgesDificuldade = {
  facil: 'bg-success',
  medio: 'bg-warning text-dark',
  dificil: 'bg-danger'
};

const badgesTipo = {
  agua: 'bg-primary',
  tecido: 'bg-info text-dark',
  plastico: 'bg-secondary',
  geral: 'bg-dark'
};

function TutorialCard({ tutorial }) {
  return (
    <div className="card shadow-sm h-100"> 
      <img src={tutorial.imagem} className="card-img-top" alt={tutorial.titulo} style={{height: '200px', objectFit: 'cover'}} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title" style={{color: '#2E8B57'}}>{tutorial.titulo}</h5>
        <p className="card-text flex-grow-1">{tutorial.descricao}</p>
        
        <div className="mt-auto">
          <span className={`badge me-2 ${badgesTipo[tutorial.tipo]}`}>
            {tutorial.tipo.charAt(0).toUpperCase() + tutorial.tipo.slice(1)}
          </span>
          <span className={`badge ${badgesDificuldade[tutorial.dificuldade]}`}>
            {tutorial.dificuldade.charAt(0).toUpperCase() + tutorial.dificuldade.slice(1)}
          </span>
        </div>
      </div>
    </div>
  );
}
export default TutorialCard;