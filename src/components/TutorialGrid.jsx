// src/components/TutorialGrid.jsx
import React from 'react';
import TutorialCard from './TutorialCard'; // <-- Importa o Card

function TutorialGrid({ tutoriais }) {
  return (
    <section className="row g-4">
      {tutoriais.length === 0 ? (
        <div className="col-12 text-center text-muted">
          <p className="fs-4">
            <i className="bi bi-emoji-frown me-2"></i>
            Nenhum tutorial encontrado com esses filtros.
          </p>
        </div>
      ) : (
        tutoriais.map(tutorial => (
          <div className="col-12 col-md-6 col-lg-4" key={tutorial.id}>
            <TutorialCard tutorial={tutorial} />
          </div>
        ))
      )}
    </section>
  );
}
export default TutorialGrid;