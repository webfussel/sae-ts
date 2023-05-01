// Strings sind einfach Zeichenketten.
// Es gibt (mindestens) drei Arten, wie man Strings definieren und nutzen kann.

const singles = 'Single quotes'
const doubles = "Double quotes"
const backs = `Backticks`

// Wenn man mit einer Stringvariante beginnt, dann muss man damit auch beenden.
// Das wiederum heißt, man kann andere Quotes im String nutzen.
const singleMixedDouble = '<div class="red"></div>' // Deshalb bevorzuge ich singles: Authentisches HTML

// Möchte man den gleichen quote type nutzen, dann muss man escapen
const escapeMe = "Java ist eine \"tolle\" Programmiersprache."

// Variablen kann man besonders cool mit backticks einbinden
const name = "C. Montgomery Burns"

const oldAndUgly = "old: I am " + name + " and I have a nuclear plant."
const newAndTasty = `new: I am ${name} and I have a nuclear plant.`

console.log('/----------AREA OF STRINGS----------/')
console.log(singles)
console.log(doubles)
console.log(backs)
console.log(singleMixedDouble)
console.log(escapeMe)
console.log(oldAndUgly)
console.log(newAndTasty)
