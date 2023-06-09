// Funkionen sind wiederholt aufrufbare Algorithmen
// Man kann sie auf verschiedenste Weisen definieren
function printSomething (parameter) {
    console.log(parameter)
}

const printSomethingAgain = function (parameter) {
    console.log(parameter)
}

const printSomethingAgainAndAgain = (parameter) => console.log(parameter)

const whatTheF = new Function('parameter', 'console.log(parameter)')

let i = 123
const impureFunction = (a) => {
    i += 23
    return a + i
}

console.log(impureFunction(2))
console.log(impureFunction(2))


// anschließend kann man sie einfach aufrufen:
console.log('/----------AREA OF FUNCTIONS----------/')
printSomething('I am function printSomething')
printSomethingAgain('I am const printSomethingAgain = function')
printSomethingAgainAndAgain('I am const printSomethingAgainAndAgain = () => {}')
whatTheF('I am the one you will probably never need: new Function')
