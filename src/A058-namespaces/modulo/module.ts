namespace MeuNamespace {
    export const nomeDoNamespace = 'Mayk';

    export class PessoaDoNamespace {
        constructor(public nome: string) {}
    }

    const pessoaDoNamespace = new PessoaDoNamespace('Mayk');
    console.log(pessoaDoNamespace);

    export namespace OutroNamespace {
        export const nomeDoNamespace = 'Nome no outro namespace';
    }
}

const pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Mayk');
console.log(pessoaDoNamespace);
console.log(MeuNamespace.nomeDoNamespace);
console.log(MeuNamespace.OutroNamespace.nomeDoNamespace);
