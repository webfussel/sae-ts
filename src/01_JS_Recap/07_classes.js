// Klassen fassen Daten und Methoden zusammen
// In JS halte ich sie für sinnlos, weil funktionale Programmierung meistens besser ist

class Hero {
    name 	    // public field
    #alterego   // private field

    constructor(name, alterego) {
        this.name = name
        this.#alterego = alterego
    }

    beHelpful () {
        console.log(`I am helping!`)
    }
}

console.log('/----------AREA OF CLASS----------/')
const wolverine = new Hero('John Logan', 'Wolverine')
wolverine.beHelpful()

console.log(wolverine)
