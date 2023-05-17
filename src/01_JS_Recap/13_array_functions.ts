const superMarioCharacters = [
    'Mario',
    'Luigi',
    'Peach',
    'Toad',
    'Bowser',
    'Wario',
    'Waluigi',
]

// forEach
superMarioCharacters.forEach((value, index) => {
    console.log(value, index)
})

interface MarioObject {
    name: string
    nameReverse: string
    index: number
}
// map, filter, reduce
const superLuigiCharacters = superMarioCharacters.map<MarioObject>((character, position) => {
    return {
        name: character,
        nameReverse: [...character].reverse().join(''),
        index: position
    }
})
console.log(superLuigiCharacters)

const s = 1231290
const digits = [...`${s}`].map(e=>+e)
console.log('NUMBER', s)
console.log('DIGITS', digits)

const onlyCharactersWithI= superMarioCharacters
                                    .filter(character => character.includes('i'))

console.log('Characters with I', onlyCharactersWithI)

const addResult = [1,2,3,4,5,6].reduce((prev, current) => {
    console.log(prev, current)
    return prev + current
}, 0)
console.log('ADD RESULT', addResult)

// sort, reverse
const charsreverse = [...superMarioCharacters].reverse()

const numbers = [1,2,3,10,12,30,1000].sort((a, b) => a-b)
console.log('SORTED NUMBERS', numbers)
