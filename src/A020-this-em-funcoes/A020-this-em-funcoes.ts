export function funcao(this: Date, nome: string, age: number): void {
    console.log(this);
    console.log(nome, age);
}

funcao.call(new Date(), 'Mayk', 21);
funcao.apply(new Date(), ['Mayk', 21]);
