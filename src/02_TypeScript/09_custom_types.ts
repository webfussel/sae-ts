type TPrimitive = string | number

let values : TPrimitive[] = ['Fiona', 33]

interface Saiyan {
    name: string
    planet: string
    power ?: number
    child ?: Saiyan
}

interface Namekian {
    name: string
    planet: string
    power ?: number
    fusion ?: boolean
}

type TAlien = Saiyan | Namekian

const sonGoku : Saiyan = {
    name: 'Karkarott',
    planet: 'Vegeta',
    power: 9001,
}

sonGoku.child = sonGoku

const vegeta : Saiyan = {
    name: 'Vegeta',
    planet: 'Vegeta',
}

