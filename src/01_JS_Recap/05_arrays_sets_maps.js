// Arrays, Sets und Maps sind Collections, die mehrere Werte speichern können

// Arrays können beliebige Werte beliebig oft speichern
const array = [1, 2]
array.push(3)

// Sets können jeden Wert nur einmal speichern
const set = new Set([1, 2])
set.add(2)
set.add(3)

// Maps haben alles als Key und Value
const map = new Map([[1, 'one'], [2, 'two'], [3, 'three']])
map.set(3, 'three')

console.log('/----------AREA OF ARRAYS SETS MAPS----------/')
console.log(array)
console.log(set)
console.log(map)

// Arrays, Sets und Maps können mit for-of durchlaufen werden
for (const value of array) {
    console.log(value)
}

for (const value of set) {
    console.log(value)
}

for (const [key, value] of map) {
    console.log(key, value)
}

