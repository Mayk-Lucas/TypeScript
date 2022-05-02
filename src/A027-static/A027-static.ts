export class Pessoa {
    static idadePadrao = 0;
    static cpfpadrao = '000.000.000-00';

    constructor(
        public nome: string,
        public sobrenome: string,
        private idade: number,
        protected _cpf: string,
    ) {}

    metodoNormal(): void {
        console.log(Pessoa.idadePadrao, Pessoa.cpfpadrao);
    }

    static criaPessoa(nome: string, sobrenome: string): Pessoa {
        return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfpadrao);
    }
}

const pessoa1 = new Pessoa('Mayk', 'Lucas', 21, '123.456.789-00');
const pessoa2 = Pessoa.criaPessoa('Maria', 'Carine');
console.log(pessoa1);
console.log(pessoa2);
pessoa1.metodoNormal();
console.log(Pessoa.idadePadrao, Pessoa.cpfpadrao);
