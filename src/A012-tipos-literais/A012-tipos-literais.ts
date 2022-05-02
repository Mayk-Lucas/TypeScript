let x = 10;
x = 0b1010;
const y = 10;
const a = 100;

const pessoa = {
    nome: 'Mayk' as const,
    sobrenome: 'Lucas',
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
    return cor;
}
console.log(escolhaCor('Vermelho'));

// Module mode
export default 1;
