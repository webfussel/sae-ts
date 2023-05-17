interface IPickUp {
    pickUp(entity: Entity): void
}

abstract class Entity {
    private static ALL_ENTITIES : number = 0
    _name: string

    protected constructor(name: string) {
        this._name = name
        Entity.ALL_ENTITIES++
    }

    get name(): string {
        return this._name
    }

    static get allEntities(): number {
        return Entity.ALL_ENTITIES
    }
}

class PowerUp extends Entity implements IPickUp {
    pickUp(entity : Entity): void {
        console.log(entity)
    }
}

class HealthEntity extends Entity {
    private _health: number = 0
    money: number = 0

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
        if (value < 0) this._health = 0
        else this._health = value
    }

    get health(): number {
        return this._health
    }

    getMoney(): string {
        return `I have ${this.money} money`
    }
}

const webfussel = new HealthEntity('Fiona', 100)
webfussel.health = -20
console.log(webfussel.health)

function AddDebug<TBase extends new (...args: any[]) => {}> (Base : TBase) {
    return class DebugEntity extends Base {
        print(): string {
            return `THIS IS A DEBUG ENTITY, ${(this as any).name}`
        }
    }
}

const DebugNPC = AddDebug(HealthEntity)

const player = new HealthEntity('Player', 100)
const enemy = new DebugNPC('Enemy', 40)

player.health = -100
player.gainHealth(10)
enemy.loseHealth(10)

console.log('08: CLASS', player)
console.log('08: CLASS', enemy)
console.log('08: CLASS', enemy.print())
