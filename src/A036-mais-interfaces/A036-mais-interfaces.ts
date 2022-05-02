// Declaration merging
interface Pessoa {
    nome: string;
}

interface Pessoa {
    readonly sobrenome: string;
    readonly enderecos: readonly string[];
    idade?: number;
}

const pessoas: Pessoa = {
    nome: 'Mayk',
    sobrenome: 'Lucas',
    enderecos: ['AV. Brasil'],
    idade: 21,
};

pessoas.idade = 22;
console.log(pessoas);
