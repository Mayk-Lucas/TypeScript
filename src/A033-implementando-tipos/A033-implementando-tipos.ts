type TipoNome = {
    nome: string;
};

type TipoSobrenome= {
    sobrenome: string;
};

type TipoNomecompleto = {
    nomeCompleto: () => string;
}

export class Pessoa implements TipoNome, TipoSobrenome, TipoNomecompleto {
    constructor(public nome: string, public sobrenome: string) {}

    nomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;
    }
}

const pessoa = new Pessoa('Mayk', 'Lucas');
console.log(pessoa.nomeCompleto());
