interface Person {
    name: string
    age: number
}

const fiona : Person = {
    name: 'Fiona',
    age: 32
}

const arifo = {} as Person
if ('something') {
    arifo.name = 'Arif'
} else if ('seomthingelse') {
    arifo.name = 'Arifo'
    arifo.age = 40
}
