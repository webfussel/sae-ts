const allPokemonTypes = [
    'Normal',
    'Fire',
    'Water',
    'Grass',
    'Electric',
    'Ice',
    'Fighting',
    'Poison',
    'Ground',
    'Flying',
    'Psychic',
    'Bug',
    'Rock',
    'Ghost',
    'Dark',
    'Dragon',
    'Steel',
    'Fairy',
] as const

type Type = [typeof allPokemonTypes[number], typeof allPokemonTypes[number]?]

interface Pokemon {
    name: string
    number: number
    types: Type
    giga: boolean
}

type PokemonTeam = [Pokemon, Pokemon, Pokemon, Pokemon, Pokemon, Pokemon]

const pokemon_team : PokemonTeam = [
    {
        name: 'Dragapult',
        number: 887,
        types: ['Dragon', 'Ghost'],
        giga: false,
    },
    {
        name: 'Tyranitar',
        number: 248,
        types: ['Rock', 'Dark'],
        giga: false,
    },
    {
        name: 'Toxtricity',
        number: 849,
        types: ['Electric', 'Poison'],
        giga: true,
    },
    {
        name: 'Centiskorch',
        number: 851,
        types: ['Fire', 'Bug'],
        giga: true,
    },
    {
        name: 'Hatterene',
        number: 858,
        types: ['Psychic', 'Fairy'],
        giga: false,
    },
    {
        name: 'Aegislash',
        number: 681,
        types: ['Steel', 'Ghost'],
        giga: false,
    }
]


interface PokemonObj {
    [pokemonName: string]: Type
}

const dragapultTypes2 = pokemon_team.find(pokemon => pokemon?.name === 'dragapult')?.types

// Schreibe eine Funktion, welche die Namen aller Pokémon zurück gibt, die Gigantamax einsetzen können (giga: true)
const getGigantamaxNames = (team: any) =>
    team
        .filter((pokemon: any) => pokemon.giga)
        .map((pokemon: any) => pokemon.name)


const gigaPokemon = getGigantamaxNames(pokemon_team)
console.log('Gigantamax Pokémon:', gigaPokemon)

function isGigaPokemon (pokemon : any) {
    return pokemon.giga
}

function getPokemonName (pokemon : any) {
    return pokemon.name
}
function getGigantamaxNames2(team: any) {
    team
        .filter(isGigaPokemon)
        .map(getPokemonName)
}

/*const getGigas = () => {
    const gigas = []
    for (const pokemon of pokemon_team) {
        if (pokemon.giga) {
            gigas.push(pokemon.name)
        }
    }
    return gigas
}*/

// Schreibe eine Funktion, welche mir alle Typen aufführt, die NICHT in meinem Team vorhanden sind





// Schreibe eine Funktion, welche die Pokémon in ein Ojekt mit folgendem Format umwandelt:
// {
//   Dragapult: ['Dragon', 'Ghost'],
//   Tyranitar: ['Rock', 'Dark'],
//   [... etc.]
// }

type PokemonTeamObject = Record<string, Type>
const team = pokemon_team.reduce<PokemonTeamObject>((result, current) => {
    return {
        ...result,
        [current.name] : current.types
    }
}, {})

console.log('POKEMON TEAM', team)

// Typisiere:
// - Pokémon
// - Pokémon-Team
// - Pokémon-Team-Objekt (vorige Aufgabe, neues Format)


// PRO TASK
// Typisiere eine Tupel für die Pokémon Typen, sodass nur die Typen aus allPokemonTypes möglich sind
// Beispiel: ['Fire', 'Water'] ist erlaubt, ['Fire', 'Banana'] nicht
