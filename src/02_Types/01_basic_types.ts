// In TypeScript gibt es einige grundlegende Typen, die wir uns hier anschauen wollen.

// Boolean
const isDone: boolean = false

// Number
const decimal: number = 6
const hex: number = 0xf00d
const binary: number = 0b1010
const octal: number = 0o744

// String
let color: string = "blue"

// any
let notSure: any = 4
notSure = "maybe a string instead"
notSure = false // okay, definitely a boolean

console.log('/----------AREA OF BASIC TYPES----------/')
console.log('isDone: ', isDone)
console.log('decimal (6): ', decimal)
console.log('hex (0xf00d): ', hex)
console.log('binary (0b1010): ', binary)
console.log('octal (0o744): ', octal)
console.log('color: ', color)
console.log('notSure: ', notSure)
