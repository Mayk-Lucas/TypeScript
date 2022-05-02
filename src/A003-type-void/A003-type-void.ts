function semRetorno(...args: string[]): void {
    console.log(args.join(' '));
}

const pessoa = {
    nome: 'Mayk',
    sobrenome: 'Lucas',

    exibirNome(): void {
        console.log(this.nome + ' ' + this.sobrenome);
    },
};

semRetorno('Mayk', 'Lucas');
pessoa.exibirNome();

export { pessoa };
