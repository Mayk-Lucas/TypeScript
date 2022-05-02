interface Constructor {
    new (...args: any[]): any;
}

function inverteNomeECor(param1: string, param2: string) {
    return function (target: Constructor) {
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

function outroDecorador(param1: string) {
    return function(target: Constructor) {
        console.log('Sou o outro decorador ' + param1);
        return target;
    }
}

@outroDecorador('O parâmetro do outro decorador')
@inverteNomeECor('Outra coisa', 'funfou')
export class Animal {
    constructor(public nome: string, public cor: string, public tipo: string) {
        console.log('Sou a classe');
    }
}

const animal = new Animal('Mayk', 'verde', 'pessoa');
console.log(animal);
