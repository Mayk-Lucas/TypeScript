type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: string };
type Pessoa = TemNome & TemSobrenome & TemIdade;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Intersecao = AB & AC & AD;

const pessoa: Pessoa = {
    nome: 'Yan',
    sobrenome: 'Lucas',
    idade: '9 dias',
};

console.log(pessoa);

// Module mode
export { pessoa };
