// this bedeutet in JS nicht immer, was man denken würde.
// Manchmal bezieht es sich auf das aufrufende Objekt, manchmal auf das globale Objekt, manchmal auf den Definitionskontext.
// Pro Tip: Nutzt kein this.

class Person {
    constructor (name) {
        this.age = 42
        this.name = name
    }

    grow = function () {
        const someFunc = () => {
            this.age++
            console.log(`Hi! Ich bin ${this.name} und so alt: ${this.age}`)
        }

        someFunc()
    }

    growUp = function () {
        function someFunc() {
            this.age++
            console.log(`Hi! Ich bin ${this.name} und so alt: ${this.age}`)
        }

        someFunc()
    }

    growUpTwo() {
        const doSomething = () => {}
    }
}

const taddl = new Person('Thaddäus')
const patrick = new Person('Patrick')

console.log('/----------AREA OF THIS CONTEXT----------/')
taddl.grow()
patrick.growUp()
