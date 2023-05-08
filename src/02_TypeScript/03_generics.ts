// Ein Generic (hier das T) ist ein Platzhalter für einen Typen
// Es erlaubt euch bei der Nutzung des Typs, den Typen zu bestimmen
interface ApiResponse<T> {
    result: T
}

// Hier haben wir dem Generic den Typen string zugewiesen
const response : ApiResponse<string> = {
    result: 'bla'
}

// Hier hat er den Typen number
const otherResponse : ApiResponse<number> = {
    result: 123
}

// Generics sind besonders nützlich, wenn man APIs ansprechen möchte, deren Rückgabewerte sich unterscheiden können
// Du kannst den Typen PokemonA in der Datei src/03_Tasks/01_typen_erstellen.ts nachschauen
// Beispiel: https://pokeapi.co/api/v2/pokemon/ditto
const getDitto = async () : Promise<ApiResponse<PokemonA>> => {
    const response : Response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    const json = await response.json()

    // Hier befindet sich nun der Typ PokemonA in der Variable json
    // Wir haben also als Rückgabewert ein ApiResponse<PokemonA>
    // Da async immer ein Promise zurückgibt, haben wir hier ein Promise<ApiResponse<PokemonA>>, genau wie oben definiert
    return { result: json }
}

const ditto : ApiResponse<PokemonA> = await getDitto()
console.log('GENERICS: ', ditto)
