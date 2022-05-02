export class Pessoa {
    constructor(
        public nome: string,
        public sobrenome: string,
        private idade: number,
        protected _cpf: string,
    ) {
        this.cpf = _cpf;
    }

    set cpf(cpf: string) {
        console.log('SETTER CHAMADO');
        this._cpf = cpf;
    }

    get cpf(): string {
        console.log('GETTER CHAMADO');
        return this._cpf.replace(/\D/g, '');
    }
}

const pessoa = new Pessoa('Mayk', 'Lucas', 21, '123.456.789-00');
pessoa.cpf = '123.456.789-99';
console.log(pessoa.cpf);
