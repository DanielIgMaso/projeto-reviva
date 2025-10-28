// src/tutoriais.js
import maquinaReusoAgua from './assets/maquina-reuso-agua.png';
import bolsaRetalhos from './assets/bolsa-retalhos.png';
import cisternaChuva from './assets/cisterna-chuva.png';
import panoTecidoReutilizado from './assets/pano-tecido-reutilizado.png';
import compostagemMinhocario from './assets/compostagem-minhocario.png';
import hortaVerticalPET from './assets/horta-vertical-PET.png';


export const dadosTutoriais = [
  {
    id: 1,
    titulo: "Reuso de Água da Máquina de Lavar",
    descricao: "Aprenda a captar e filtrar a água do enxágue para lavar calçadas e o quintal.",
    tipo: "agua",
    dificuldade: "facil",
    imagem: maquinaReusoAgua 
  },
  {
    id: 2,
    titulo: "Bolsa Ecológica de Retalhos",
    descricao: "Transforme pedaços de tecido e roupas velhas em uma bolsa de compras estilosa.",
    tipo: "tecido",
    dificuldade: "medio",
    imagem: bolsaRetalhos
  },
  {
    id: 3,
    titulo: "Cisterna Caseira para Água da Chuva",
    descricao: "Um projeto mais avançado para captar água da chuva com tambores e filtros.",
    tipo: "agua",
    dificuldade: "dificil",
    imagem: cisternaChuva
  },
  {
    id: 4,
    titulo: "Horta Vertical com Garrafas PET",
    descricao: "Crie uma horta compacta para temperos usando garrafas plásticas na parede.",
    tipo: "plastico",
    dificuldade: "facil",
    imagem: hortaVerticalPET
  },
  {
    id: 5,
    titulo: "Composteira Doméstica (Minhocário)",
    descricao: "Transforme seus resíduos orgânicos de cozinha em adubo rico para suas plantas.",
    tipo: "geral",
    dificuldade: "medio",
    imagem: compostagemMinhocario
  },
  {
    id: 6,
    titulo: "Panos de Limpeza com Camisetas Velhas",
    descricao: "A forma mais simples de reutilizar camisetas de algodão que não servem mais.",
    tipo: "tecido",
    dificuldade: "facil",
    imagem: panoTecidoReutilizado
  }
];