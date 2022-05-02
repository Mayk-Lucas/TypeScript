export class Pessoa {
    constructor(
        public nome: string,
        public sobrenome: string,
        private idade: string,
        protected cpf: string,
    ) {}

    getIdade(): string {
        return this.idade;
    }

    getCpf(): string {
        return this.cpf;
    }

    getNomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;
    }
}

export class Aluno extends Pessoa {
    constructor(
        nome: string,
        sobrenome: string,
        idade: string,
        cpf: string,
        public sala: string,
    ) {
        super(nome, sobrenome, idade, cpf);
    }
    getNomeCompleto(): string {
        console.log('FAZENDO ALGO ANTES');
        const result = super.getNomeCompleto();
        return result + 'HEYYYYYYYY!!';
    }
}

export class Cliente extends Pessoa {
    getNomeCompleto(): string {
        return 'Isso vem do cliente: ' + this.nome + ' ' + this.sobrenome;
    }
}

const pessoa = new Pessoa('Mayk', 'Lucas', '21', '000.000.000-00');
const aluno = new Aluno('Yan', 'Lucas', '13 dias', '000.000.000-00', '0001');
const cliente = new Cliente('Maria', 'Carine', '23', '000.000.000-00');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log(aluno);
