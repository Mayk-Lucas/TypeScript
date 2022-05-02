export abstract class Personagem {
    protected abstract emoji: string;

    constructor(
        protected nome: string,
        protected ataque: number,
        protected vida: number,
    ) { }

    atacar(personagem: Personagem): void {
        this.bordao();
        personagem.perderVida(this.ataque);
    }

    powerup(personagem: Personagem): void {
        this.bordao();
        personagem.powerUp(this.vida);
    }

    perderVida(forcaAtaque: number): void {
        this.vida -= forcaAtaque;
        console.log(
            `${this.emoji} - ${this.nome} agora tem ${this.vida} de vida...`,
        );
    }

    powerUp(habilidade: number): void {
        this.vida += habilidade;
        console.log(
            `${this.emoji} - ${this.nome} agora tem ${this.vida} de vida...`,
        );
    }

    abstract bordao(): void;
}

export class Guerreira extends Personagem {
    protected emoji = '\u{1F9DD}';

    bordao(): void {
        console.log(this.emoji + ' GUERREIRA ATACA COM SUA ESPADA!!');
    }
}

export class Monstro extends Personagem {
    protected emoji = '\u{1F423}';

    bordao(): void {
        console.log(this.emoji + ' GOBLIN ATACA COM SEU BASTÂO');
    }
}

export class HabilidadeGuerreira extends Personagem {
    protected emoji = '\u{1F479}';

    bordao(): void {
        console.log(this.emoji + ' GUERREIRA POWER UP');
    }
}

export class HabilidadeMosntro extends Personagem {
    protected emoji = '\u{1F409}';

    bordao(): void {
        console.log(this.emoji + ' MONSTRO POWER UP');
    }
}

export class GuerreiraPowerUp extends Personagem {
    protected emoji = '\u{1F479}';

    bordao(): void {
        console.log(this.emoji + ' GUERREIRA POWER UP, ATACA MOSTRO');
    }
}

export class MosntroPowerUp extends Personagem {
    protected emoji = '\u{1F409}';

    bordao(): void {
        console.log(this.emoji + ' MONSTRO POWER UP, ATACA GUERREIRA');
    }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 87, 1000);

// Power up
const guerreira2 = new HabilidadeGuerreira('Guerreira', 0, 100000);
const monstro2 = new HabilidadeMosntro('Monstro', 0, 999999);

const guerreira3 = new GuerreiraPowerUp('Guerreira', 99999, 0);
const monstro3 = new MosntroPowerUp('Monstro', 8000, 0);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
monstro.atacar(guerreira);

guerreira2.powerup(guerreira);

monstro.atacar(guerreira);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
monstro.atacar(guerreira);

monstro2.powerup(monstro);

guerreira3.atacar(monstro);
guerreira3.atacar(monstro);
guerreira3.atacar(monstro);
monstro3.atacar(guerreira);
monstro3.atacar(guerreira);
monstro3.atacar(guerreira);


