// Variablen deklarieren

// var - veralteter Mist, niemals nutzen
var doNotUseVar = 'DO. NOT. USE. VAR.'

// let - Variable, die man neu zuweisen kann
let dynamic = 1337
dynamic = 42

// const - Variable, die man NICHT neu zuweisen kann
const constant = true
constant = false // Siehst du? Fehler.

const mutable = {
    aField: 'a value'
}
mutable.aField = 'other value' // Mutationen sind möglich. Kein Fehler.
