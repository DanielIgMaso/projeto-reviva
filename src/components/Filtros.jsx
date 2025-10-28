// src/components/Filtros.jsx
import React from 'react';

// 1. Recebe as novas props: searchTerm e onSearchChange
function Filtros({ filtroTipo, filtroDificuldade, searchTerm, onTipoChange, onDificuldadeChange, onSearchChange }) {
  
  return (
    <nav className="p-3 mb-4 bg-light rounded shadow-sm">
      {/* 2. Ajustamos o layout para 3 colunas */}
      <div className="row g-3 justify-content-center">
        
        {/* Coluna Filtro Tipo */}
        <div className="col-md-4">
          <label htmlFor="filtro-tipo" className="form-label fw-bold">
            <i className="bi bi-recycle me-1"></i> Tipo de Reutilização
          </label>
          <select 
            id="filtro-tipo" 
            className="form-select" 
            value={filtroTipo}
            onChange={(e) => onTipoChange(e.target.value)}
          >
            <option value="todos">Todos os Tipos</option>
            <option value="agua">Água</option>
            <option value="tecido">Tecido</option>
            <option value="plastico">Plástico</option>
            <option value="geral">Geral</option>
          </select>
        </div>

        {/* Coluna Filtro Dificuldade */}
        <div className="col-md-4">
          <label htmlFor="filtro-dificuldade" className="form-label fw-bold">
            <i className="bi bi-tools me-1"></i> Nível de Dificuldade
          </label>
          <select 
            id="filtro-dificuldade" 
            className="form-select"
            value={filtroDificuldade}
            onChange={(e) => onDificuldadeChange(e.target.value)}
          >
            <option value="todos">Todas as Dificuldades</option>
            <option value="facil">Fácil</option>
            <option value="medio">Médio</option>
            <option value="dificil">Difícil</option>
          </select>
        </div>
        
        {/* 3. NOVA COLUNA: BARRA DE PESQUISA */}
        <div className="col-md-4">
          <label htmlFor="filtro-busca" className="form-label fw-bold">
            <i className="bi bi-search me-1"></i> Buscar no Título/Descrição
          </label>
          <input 
            type="text"
            id="filtro-busca"
            className="form-control"
            placeholder="Ex: horta, camiseta, pet..."
            value={searchTerm} // O valor é controlado pelo React
            onChange={(e) => onSearchChange(e.target.value)} // Atualiza o estado no App.jsx
          />
        </div>

      </div>
    </nav>
  );
}

export default Filtros;