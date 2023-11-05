// Type Arrays => Array<T> - T[]

export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((acc, valor) => acc * valor, 1);
}

export function concatenaStrings(...args: string[]): string {
  return args.reduce((acc, valor) => acc + valor).toUpperCase();
}

const result = multiplicaArgs(1, 2, 3);
const concatenacao = concatenaStrings('Diogo', ' ', 'Blanco');
console.log(result);
console.log(concatenacao);
