// this bedeutet in JS nicht immer, was man denken würde.
// Manchmal bezieht es sich auf das aufrufende Objekt, manchmal auf das globale Objekt, manchmal auf den Definitionskontext.
// Pro Tip: Nutzt kein this.

function Person(name) {
    this.age = 0
    this.name = name

    this.grow = () => {
        setTimeout(() => {
            this.age++
            console.log(`THIS CONTEXT: Hi! Ich bin ${this.name} und so alt: ${this.age}`)
        })
    }

    this.growUp = () => {
        setTimeout(function() {
            this.age++
            console.log(`THIS CONTEXT: Hi! Ich bin ${this.name} und so alt: ${this.age}`)
        })
    }
}

const taddl = new Person('Thaddäus')
const patrick = new Person('Patrick')

taddl.grow()
patrick.growUp()
