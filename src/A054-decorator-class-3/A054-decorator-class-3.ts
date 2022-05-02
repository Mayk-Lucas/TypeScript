function inverteNomeECor(param1: string, param2: string) {
    return function <T extends new (...args: any[]) => any>(target: T): T {
        console.log('Sou o decorador e recebi', target);

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
                return valor.split('').reverse().join('') + ' ' + param1 + ' ' + param2;
            }
        };
    }
}

@inverteNomeECor('Outra coisa', 'funfou')
export class Animal {
    constructor(public nome: string, public cor: string, public tipo: string) {
        console.log('Sou a classe');
    }
}

const animal = new Animal('Mayk', 'verde', 'pessoa');
console.log(animal);
