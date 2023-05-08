//abilities, name
// abilites [ability(name, url), is_hidden, slot ]abilities: [
interface Ability {
    name: string
    url: string
}
interface Abilities {
    ability : Ability
    is_hidden: boolean
    slot: number
}
interface PokemonA {
    name: string;
    abilities: Abilities[]
}

async function getDittoAsync() : Promise<PokemonA> {
    const response : Response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    return response.json()
}

async function func2 () {
    const ditto = await getDittoAsync()
    const dittoAbilities = ditto.abilities.map(ability => ability.ability.name)
    console.log('DITTO ABILITIES: ', dittoAbilities)
}

func2()
