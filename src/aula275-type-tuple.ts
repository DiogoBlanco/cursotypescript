// Type Tuple

const dadosCliente1: readonly [number, string] = [1, 'Diogo Blanco']; //read only
const dadosCliente2: [number, string, string?] = [1, 'Diogo Blanco', '1985'];
const dadosCliente3: [number, string, ...string[]] = [1, 'Diogo Blanco'];
console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
