// Type Never - nunca retorna nada, trava ou lança erro

export function criaErro(): never {
  throw new Error('Erro Qualquer');
}
criaErro();
