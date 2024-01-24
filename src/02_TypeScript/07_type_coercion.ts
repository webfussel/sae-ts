interface Person {
    name: string
    age: number
    street: string[]
}

const fiona : Person = {
    name: 'Fiona',
    age: 32,
    street: ['Teichäckerweg', 'Spöck']
}

const arifo = {} as Person
if ('something') {
    arifo.name = 'Arif'
} else if ('seomthingelse') {
    arifo.name = 'Arifo'
    arifo.age = 40
}

const NO_NAME = 'NO_NAME'
const alex : Person = {
    name: NO_NAME,
    age: -1,
    street: []
}
