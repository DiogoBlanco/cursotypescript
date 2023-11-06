// Tipos Literais

let x = 10; // eslint-disable-line
x = 0b1010;
const y = 10;
const a = 100; // eslint-disable-line

const person = {
  firstname: 'Diogo' as const,
  lastname: 'Blanco',
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}
console.log(escolhaCor('Azul'));
export default 1;
