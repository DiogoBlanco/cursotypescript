// tipo void

function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Diogo',
  sobrenome: 'Blanco',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Diogo', 'Blanco');
pessoa.exibirNome();

export { pessoa };
