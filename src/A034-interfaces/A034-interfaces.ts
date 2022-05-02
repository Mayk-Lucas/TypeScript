interface TipoNome {
    nome: string;
}

interface TipoSobrenome {
    sobrenome: string;
}

interface TipoNomecompleto {
    nomeCompleto: () => string;
}

type TipoPessoa = TipoNome & TipoSobrenome & TipoNomecompleto;
interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomecompleto {}

export class Pessoa implements TipoPessoa2 {
    constructor(public nome: string, public sobrenome: string) {}

    nomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;
    }
}

const pessoaObj: TipoPessoa2 = {
    nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    },
    nome: 'Mayk',
    sobrenome: 'Agora tá ok',
};

const pessoa = new Pessoa('Mayk', 'Lucas');
console.log(pessoa.nomeCompleto());
console.log(pessoaObj.nomeCompleto());
