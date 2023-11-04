/* eslint-disable */

// type anottations

let nome: string = 'Diogo'; // string
let idade: number = 30; // number - int float hexa binario octal
let adulto: boolean = true; // boolean
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; // bigint

// Arrays
let arraydeNumeros: number[] = [1, 2, 3];
let arraydeStrings: string[] = ['Diogo', 'Blanco'];

//Objetos
let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  //adulto?: => opcional
  nome: 'Diogo',
  idade: 38,
  adulto: true,
};
console.log(pessoa.nome, pessoa.idade, pessoa.adulto);

//Funções
function soma(x: number, y: number): number {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
