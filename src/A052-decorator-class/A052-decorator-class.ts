@decorator
export class Animal {
    constructor(public nome: string, public cor: string, public tipo: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
    return class extends target {
        cor: string;
        nome: string;
        tipo: string;

        constructor(...args: any[]) {
            super(...args);
            this.nome = this.inverte(args[0]);
            this.cor = this.inverte(args[1]);
            this.tipo = this.inverte(args[2]);
        }

        inverte(valor: string): string {
            return valor.split('').reverse().join('');
        }
    };
}

const animal = new Animal('Mayk', 'verde', 'pessoa');
console.log(animal);
