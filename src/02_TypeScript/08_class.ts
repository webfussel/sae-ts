abstract class Entity {
    private readonly _name: string

    protected constructor(name: string) {
        this._name = name
    }

    get name(): string {
        return this._name
    }
}

class HealthEntity extends Entity {
    private _health: number = 0

    constructor(name: string, health: number) {
        super(name)
        this._health = health
    }

    gainHealth(health: number): void {
        this._health += health
    }

    loseHealth(health: number): void {
        this._health -= health
    }

    set health(value: number) {
        this._health = value
    }

    get health(): number {
        return this._health
    }
}

function AddDebug<TBase extends new (...args: any[]) => {}> (Base : TBase) {
    return class DebugEntity extends Base {
        print(): void {
            console.log(`THIS IS A DEBUG ENTITY`, (this as any)['name'])
        }
    }
}

const DebugNPC = AddDebug(HealthEntity)

const player = new HealthEntity('Player', 100)
const enemy = new DebugNPC('Enemy', 40)

player.gainHealth(10)
enemy.loseHealth(10)

console.log('08: CLASS', player)
console.log('08: CLASS', enemy.print())
