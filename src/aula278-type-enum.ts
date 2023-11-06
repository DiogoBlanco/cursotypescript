//Type Enum - exclusivo do Typescript

enum Colors {
  Vermelho = 10, // 0
  Azul = 100, // 1
  Amarelo = 200, // 2
  Roxo = 'Roxo',
  Verde = 201,
  Rosa,
}

console.log(Colors.Vermelho);
console.log(Colors[10]);
console.log(Colors.Rosa);

export function escolhaACor(cor: Colors): void {
  console.log(Colors[cor]);
}

escolhaACor(100);
