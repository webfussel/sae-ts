// this bedeutet in JS nicht immer, was man denken würde.
// Manchmal bezieht es sich auf das aufrufende Objekt, manchmal auf das globale Objekt, manchmal auf den Definitionskontext.
// Pro Tip: Nutzt kein this.

function Person(name) {
    this.age = 42
    this.name = name

    this.grow = function () {
        const someFunc = () => {
            this.age++
            console.log(`Hi! Ich bin ${this.name} und so alt: ${this.age}`)
        }

        someFunc()
    }

    this.growUp = function () {
        function someFunc() {
            this.age++
            console.log(`Hi! Ich bin ${this.name} und so alt: ${this.age}`)
        }

        someFunc()
    }
}

const taddl = new Person('Thaddäus')
const patrick = new Person('Patrick')

console.log('/----------AREA OF THIS CONTEXT----------/')
taddl.grow()
patrick.growUp()
