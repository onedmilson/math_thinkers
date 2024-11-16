import conjuntoImage from '../src/assets/conjunto.jpg';
import sequenciaImage from '../src/assets/sequencia.jpg';
import probabilidadeImage from '../src/assets/probabilidade.jpg';
import estatisticaImage from '../src/assets/estatistica.jpg';

export const exercicios = [
  {
    id: 1,
    image: conjuntoImage,
    title: 'Conjuntos',
    category: 'Conjuntos',
    questions: [
      {
        id: 1,
        text: 'Qual é a união de A = {1, 2, 3} e B = {3, 4, 5}?',
        options: ['{1, 2, 3, 4, 5}', '{1, 2, 4, 5}', '{3, 4}', '{2, 3, 4}'],
        correct: '{1, 2, 3, 4, 5}',
      },
      {
        id: 2,
        text: 'Qual é a interseção de A = {1, 2, 3} e B = {3, 4, 5}?',
        options: ['{1, 2}', '{3}', '{4, 5}', '{1, 2, 3}'],
        correct: '{3}',
      },
      {
        id: 3,
        text: 'Qual é a diferença entre A = {1, 2, 3} e B = {3, 4, 5}?',
        options: ['{1, 2}', '{3, 4, 5}', '{2}', '{1, 2, 3, 4, 5}'],
        correct: '{1, 2}',
      },
      {
        id: 4,
        text: 'Qual é o complemento de A = {1, 2, 3} em um universo de {1, 2, 3, 4, 5}?',
        options: ['{4, 5}', '{3, 4}', '{1, 2}', '{1, 5}'],
        correct: '{4, 5}',
      },
      {
        id: 5,
        text: 'Qual é o conjunto das partes de A = {1, 2}?',
        options: ['{1, 2}', '{}, {1}, {2}, {1, 2}', '{1, 2, {1}}', '{1, 2}'],
        correct: '{}, {1}, {2}, {1, 2}',
      },
    ],
  },
  {
    id: 2,
    image: sequenciaImage,
    title: 'Sequências',
    category: 'Sequências',
    questions: [
      {
        id: 1,
        text: 'Qual é o próximo número da sequência: 1, 3, 5, 7, ?',
        options: ['8', '9', '10', '11'],
        correct: '9',
      },
      {
        id: 2,
        text: 'Qual é o termo geral da sequência: 2, 5, 8, 11, ?',
        options: ['3n', '3n + 2', 'n + 2', 'n^2'],
        correct: '3n + 2',
      },
      {
        id: 3,
        text: 'Qual é o valor de n para a sequência: 1, 4, 9, 16, ?',
        options: ['3', '4', '5', '6'],
        correct: '5',
      },
      {
        id: 4,
        text: 'Qual é a soma dos primeiros 5 termos da sequência: 1, 2, 3, 4, 5?',
        options: ['15', '10', '5', '20'],
        correct: '15',
      },
      {
        id: 5,
        text: 'Qual é a razão da sequência geométrica: 2, 6, 18, 54?',
        options: ['2', '3', '4', '5'],
        correct: '3',
      },
    ],
  },
  {
    id: 3,
    image: probabilidadeImage,
    title: 'Probabilidade',
    category: 'Probabilidade',
    questions: [
      {
        id: 1,
        text: 'Qual é a probabilidade de tirar um número ímpar em um dado?',
        options: ['1/2', '1/3', '1/6', '1/4'],
        correct: '1/2',
      },
      {
        id: 2,
        text: 'Em uma urna com 5 bolas vermelhas e 3 bolas azuis, qual é a probabilidade de tirar uma bola azul?',
        options: ['3/5', '3/8', '5/8', '5/3'],
        correct: '3/8',
      },
      {
        id: 3,
        text: 'Qual é a probabilidade de sair cara em uma moeda?',
        options: ['1/2', '1/3', '1/4', '2/3'],
        correct: '1/2',
      },
      {
        id: 4,
        text: 'Em um baralho, qual é a probabilidade de tirar uma carta de copas?',
        options: ['1/4', '1/13', '1/52', '1/2'],
        correct: '1/4',
      },
      {
        id: 5,
        text: 'Se um saco tem 10 bolas vermelhas e 10 bolas azuis, qual é a probabilidade de tirar uma bola vermelha?',
        options: ['1/2', '1/3', '2/3', '1/10'],
        correct: '1/2',
      },
    ],
  },
  {
    id: 4,
    image: estatisticaImage,
    title: 'Estatística',
    category: 'Estatística',
    questions: [
      {
        id: 1,
        text: 'Qual é a média de: 2, 4, 6, 8, 10?',
        options: ['6', '5', '7', '8'],
        correct: '6',
      },
      {
        id: 2,
        text: 'Qual é a mediana de: 1, 3, 5, 7, 9?',
        options: ['5', '3', '7', '9'],
        correct: '5',
      },
      {
        id: 3,
        text: 'Qual é a moda dos números: 1, 2, 3, 3, 4, 5?',
        options: ['1', '2', '3', '4'],
        correct: '3',
      },
      {
        id: 4,
        text: 'Qual é o desvio padrão de: 3, 6, 9, 12?',
        options: ['2.5', '3', '3.5', '4'],
        correct: '3',
      },
      {
        id: 5,
        text: 'Qual é a variância dos números: 1, 2, 3, 4?',
        options: ['1.25', '2', '1', '1.5'],
        correct: '1.25',
      },
    ],
  },
];

export const categorias = [
  { name: 'todos' },
  { name: 'Conjuntos' },
  { name: 'Sequências' },
  { name: 'Probabilidade' },
  { name: 'Estatística' },
];
