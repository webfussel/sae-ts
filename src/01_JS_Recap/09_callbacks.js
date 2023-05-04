// Funktionen in JavaScript sind Objekte. Sie können daher auch als Parameter an andere Funktionen übergeben werden.
// Eine Funktion, die eine andere Funktion als Parameter erwartet, wird als "higher order function" bezeichnet.
// Die übergebene Funktion wird als "callback function" bezeichnet.

console.log('/----------AREA OF CALLBACK----------/')

// Eine Funktion, die eine andere Funktion als Parameter erwartet
function higherOrderFunction(callback) {
    console.log("higherOrderFunction")
    callback?.()
}

// Eine Funktion, die als Parameter übergeben wird
function callbackFunction() {
    console.log("callbackFunction")
}

// Aufruf der Funktion
higherOrderFunction(callbackFunction)

// Callbacks sind eine tolle Möglichkeit um Code zu modularisieren und zu wiederverwenden.
// Beispiele dafür sind die verschiedenen Array-Methoden, die eine Callback-Funktion als Parameter erwarten.
// Die Callback-Funktion wird dann auf jedes Element des Arrays angewendet.

// Beispiel: Array.filter()
// Die filter()-Methode erstellt ein neues Array mit allen Elementen, die den Kriterien einer Callback-Funktion entsprechen.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const onlyEvenNumbers = numbers.filter(x => x % 2 === 0)
console.log('onlyEvenNumbers', onlyEvenNumbers)

// Jetzt bauen wir das aber mal etwas aufesplittet auf, damit wir es besser verstehen.
// Hier reimplementiere ich die filter()-Methode, um zu zeigen, was sie macht.
// Und genau hier sieht man, warum die Prototype-Chain hilfreich sein kann:
// Wir können einfach eigene Methoden zu vorhandenen Objekten hinzufügen (wie in diesem Fall Array)
Array.prototype.myFilter = function (callback) {
    const filteredArray = []
    for (let i = 0; i < this.length; i++) {
        const callbackResult = callback(this[i])
        if (callbackResult) {
            filteredArray.push(this[i])
        }
    }
    return filteredArray
}

// Wir definieren eine Funktion, die als Parameter ein Element des Arrays erwartet.
// Diese Funktion gibt true zurück, wenn das Element gerade ist, ansonsten false.
function isEven(number) {
    return number % 2 === 0
}

// myFilter macht einfach genau das gleiche wie filter, aber wir können immerhin sehen, wie es funktioniert und wofür man den callback brauchen kann
const onlyEvenNumbers2 = numbers.myFilter(isEven)
console.log('onlyEvenNumbers2', onlyEvenNumbers2)
