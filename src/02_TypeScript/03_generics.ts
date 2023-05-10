// Ein Generic (hier das T) ist ein Platzhalter für einen Typen
// Es erlaubt euch bei der Nutzung des Typs, den Typen zu bestimmen

type SomeResponse<T> = T[]
interface ApiResponse<T> {
    result: T
}

// Hier haben wir dem Generic den Typen string zugewiesen
const response : ApiResponse<string> = {
    result: 'bla',
}

// Hier hat er den Typen number
const otherResponse : ApiResponse<number> = {
    result: 123,
}

// Generics sind besonders nützlich, wenn man APIs ansprechen möchte, deren Rückgabewerte sich unterscheiden können
// Du kannst den Typen PokemonA in der Datei src/03_Tasks/01_typen_erstellen.ts nachschauen
// Beispiel: https://pokeapi.co/api/v2/pokemon/ditto
const getDitto = async () : Promise<ApiResponse<PokemonA>> => {
    const response : Response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    const json : PokemonA = await response.json()

    // Hier befindet sich nun der Typ PokemonA in der Variable json
    // Wir haben also als Rückgabewert ein ApiResponse<PokemonA>
    // Da async immer ein Promise zurückgibt, haben wir hier ein Promise<ApiResponse<PokemonA>>, genau wie oben definiert
    return { result: json }
}

const ditto = await getDitto()
console.log('GENERICS: ', ditto)

// Generics können auch direkt mit Funktionen übergeben werden
const getDittoWithGenerics = async <T> () : Promise<ApiResponse<T>> => {
    const response : Response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    const json : T = await response.json()
    return { result: json }
}

// Jetzt können wir direkt beim Funktionsaufruf bestimmen, welchen Typen wir zurückgeben wollen
const dittoWithGenerics= await getDittoWithGenerics<PokemonA>()


// Auch Übergabeparameter können Generics sein
const removeRandomArrayItem = <T> (array: T[]) : T[] => {
    const randomIndex = Math.floor(Math.random() * array.length)
    const newArray = [...array]
    newArray.splice(randomIndex, 1)
    return newArray
}

// Hier verhält sich der Generic FAST wie any, da es egal ist, welche Typen wir übergeben
// Aber ihr könnt an den automatischen Typisierungen feststellen, dass es sich nicht um any handelt
// Dadurch haben wir in der weiteren Anwendung die Möglichkeit, die Typisierungen zu nutzen statt mit any rumzufummeln
const removedItemArray = removeRandomArrayItem([1, 2, 3, 4, 5])
const removedItemArray2 = removeRandomArrayItem(['a', 'b', 'c', 'd', 'e'])
const removedItemArray3 = removeRandomArrayItem([1, 2, true, 'd', 'e'])

console.log('GENERICS: removedItemArray: ', removedItemArray)
console.log('GENERICS: removedItemArray2: ', removedItemArray2)
console.log('GENERICS: removedItemArray3: ', removedItemArray3)
