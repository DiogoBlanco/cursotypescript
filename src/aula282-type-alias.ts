// Type Alias

type Idade = number;

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';

type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';

type CorPreferida = CorRGB | CorCMYK;

type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: CorPreferida;
};

const pessoa1: Pessoa = {
  nome: 'Diogo Blanco',
  idade: 38,
  salario: 7000,
  corPreferida: 'Azul',
};
console.log(pessoa1);

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa1, corPreferida: cor };
}
console.log(setCorPreferida(pessoa1, 'Preto'));
console.log(pessoa1);
