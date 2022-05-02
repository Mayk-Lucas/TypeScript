// Tuple
const dadosCliente1: readonly [number, string] = [1, 'Mayk'];
const dadosCliente2: [number, string, string] = [1, 'Mayk', 'Lucas'];
const dadosCliente3: [number, string, string?] = [1, 'Yan'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Yan', 'Lucas'];

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readonly array
const array1: readonly string[] = ['Mayk', 'Lucas'];
const array2: ReadonlyArray<string> = ['Yan', 'Lucas'];

console.log(array1);
console.log(array2);
