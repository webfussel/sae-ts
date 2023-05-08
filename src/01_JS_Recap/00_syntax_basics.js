// Was ist der unterschied zwischen =, ==, === ?
// = Zuweisung
// == Vergleich
// === Kompletter Vergleich (Datentyp)
const someString = 'asdf'

const num = 1
console.log('1 == 1', 1 == num) // true
console.log('"1" == 1', '1' == num) // true
console.log('true == 1', true == num) // true

console.log('1 === 1', 1 === num) // true
console.log("'1' === 1", '1' === num) // false
console.log('true === 1', true === num) // false

// Was macht ein Punkt . ?
// Verzeichnisse in directory globs
console.log('./src')
console.log('../src')

// Ermöglicht zugriff auf Felder von Objekten
const console2 = {
    log () {},
    table: function () {},
    directory: 'somewhere'
}

console.log(console2.directory)

// Was macht ein Komma , ?
// Trennt objektinhalt, arrayelemente und parameter
function someFunction(a, b, c) {}
const someObject = {someKey:'someValue',someBoolean:false}

// PRO MOVE
let a = 0
let b = 4
const bla = (a+b, b)

// Was machen die verschiedenen Klammern () [] {} (<>)?

// []
// array definition
const array = [1, 2, 3]
const lastElement = array[2]

const keyName = 'someKey'
const someKey = someObject[keyName]

const [first, second] = array

// ()
// Funktionsdefinition
function tollerName () {}

// Funktionsaufrufe
tollerName()

// {}
// Objektdefinition
const objekt = {}

// Function Body definieren
function andereFunktion () {
    const blubber = 321
    if (true) {
        const bla = 123;
        console.log(bla)
        console.log(blubber)
    }
    console.log(bla)
}

if (true) { } else { }
for (let i = 0; i < 10; i++) {
    console.log(i)
}
while (true) {}
do {} while(true)

class SomeClass {
    constructor() {}
}
const instance = new SomeClass()

{
    const numb = () => {}
    console.log(numb)
    console.log(instance)
    {
        console.log(numb)
    }
}
const numb = () => {}



// Was macht ein Semikolon ; ?
numb()
;[1, 2, 3].forEach(num => console.log(num))


// Was machen && und || und warum sind sie doppelt?
// Für logische Ausdrücke
// && => und
// || => oder
// Boolsher Ausdruck erzeugen
if (1 < 2 && 4 < 5) {}
if (1 < 2 || 5 < 4) {}

// & und | sind schon vorbelegt
const someBla = 4 | 1
// somebla = 100 | 001 => 101 => 5

const someVar = ''
const someVal = someVar || 'abc' // someVar ?? 'abc'

if (someVar) {
    numb()
}

someVar && numb()


// Was ist ein Ternary Operator ?: ?
const random = Math.random()
let x;
if (random > 0.5) {
    x = 'abc'
} else {
    x = 'fgh'
}

const y = random > 0.5 ? 'abc' : 'fgh'


// Was ist ein switch-case Statement?
// Eine Art if-else
// Verschiedene Cases

const randomInt = Math.round(Math.random() * 10)

switch (randomInt) {
    case 1:
        break
    case 8:
        numb()
        break
    case 9:
        numb()
        numb()
        break
    default:
        console.log('asdf')
}

