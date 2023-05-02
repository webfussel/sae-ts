// Der Spread-Operator wird verwendet, um ein Array in einzelne Elemente zu zerlegen.


console.log('/----------AREA OF SPREAD REST DESTRUCTURING----------/')
const arr = [1, 2, 3]
console.log('spread', ...arr)

// Mit dem Spread-Operator können Arrays auch zusammengefügt werden.
const arrayA = [1, 2, 3]
const arrayB = [4, 5, 6]
const arrayC = [...arrayA, ...arrayB]
const arrayD = [arrayA, arrayB]
console.log('arrayA', arrayA)
console.log('arrayB', arrayB)
console.log('arrayC (spread)', arrayC)
console.log('arrayD (no spread)', arrayD)

// Der Spread-Operator kann auch verwendet werden, um Objekte zusammenzufügen.
const objA = {a: 1, b: 2}
const objB = {c: 3, d: 4}
const objC = {...objA, ...objB}
const objD = {objA, objB}
console.log('objA', objA)
console.log('objB', objB)
console.log('objC (spread)', objC)
console.log('objD (no spread)', objD)

// Der Rest-Operator wird verwendet, um einzelne Elemente in ein Array zu packen.
const sum = (...numbers) => numbers.reduce((sum, number) => sum + number)

console.log('rest parameter', sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

// Der Rest-Operator kann auch verwendet werden, um einzelne Elemente aus einem Array zu entfernen.
// Der allgemeine Syntax auf der linken Seite nennt sich desctructuring.
const [first, second, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log('first', first)
console.log('second', second)
console.log('rest', rest)

// Das alles funktioniert auch mit Objekten.
const obj = {a: 1, b: 2, c: 3, d: 4, e: 5}
const {a, b, ...restObj} = obj
console.log('a', a)
console.log('b', b)
console.log('restObj', restObj)
