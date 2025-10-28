// src/App.jsx
import React, { useState, useMemo } from 'react';
import { dadosTutoriais } from './tutoriais';
import Header from './components/Header';
import Filtros from './components/Filtros';
import TutorialGrid from './components/TutorialGrid';
import Footer from './components/Footer';

// Paleta de cores
const cores = {
  verdePrincipal: '#2E8B57',
  verdeSecundario: '#8FBC8F',
  fundoClaro: '#F0FFF0',
};

function App() {
  // Estados para os filtros
  const [filtroTipo, setFiltroTipo] = useState('todos');
  const [filtroDificuldade, setFiltroDificuldade] = useState('todos');
  
  // NOVO ESTADO para a barra de pesquisa
  const [searchTerm, setSearchTerm] = useState('');

  // LÓGICA DE FILTRAGEM ATUALIZADA
  const tutoriaisFiltrados = useMemo(() => {
    
    // Converte o termo de busca para minúsculas (para não diferenciar maiúsculas/minúsculas)
    const termoBuscaLower = searchTerm.toLowerCase();

    return dadosTutoriais.filter(tutorial => {
      // 1. Verifica os filtros <select>
      const matchTipo = (filtroTipo === 'todos') || (tutorial.tipo === filtroTipo);
      const matchDificuldade = (filtroDificuldade === 'todos') || (tutorial.dificuldade === filtroDificuldade);
      
      // 2. Verifica a barra de pesquisa (no título OU na descrição)
      const matchBusca = (searchTerm === '') || // Se a busca estiver vazia, mostra tudo
                         (tutorial.titulo.toLowerCase().includes(termoBuscaLower)) ||
                         (tutorial.descricao.toLowerCase().includes(termoBuscaLower));

      // 3. Retorna apenas os tutoriais que passam em TODOS os filtros
      return matchTipo && matchDificuldade && matchBusca;
    });
    
  // ATUALIZA AS DEPENDÊNCIAS: o filtro roda de novo se qualquer um destes mudar
  }, [filtroTipo, filtroDificuldade, searchTerm]); 

  // Estilo global
  document.body.style.backgroundColor = cores.fundoClaro;

  return (
    <div className="App">
      <Header corPrincipal={cores.verdePrincipal} corSecundaria={cores.verdeSecundario} />
      
      <main className="container my-4">
        {/* Passa os novos valores e funções para o componente Filtros */}
        <Filtros 
          filtroTipo={filtroTipo}
          filtroDificuldade={filtroDificuldade}
          searchTerm={searchTerm} // <-- NOVO
          onTipoChange={setFiltroTipo}
          onDificuldadeChange={setFiltroDificuldade}
          onSearchChange={setSearchTerm} // <-- NOVO
        />
        
        <TutorialGrid tutoriais={tutoriaisFiltrados} />
      </main>

      <Footer />
    </div>
  );
}

export default App;