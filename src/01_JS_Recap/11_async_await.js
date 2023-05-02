// Da Verkettungen von Promises mit then() sehr hässlich und unübersichtlich werden kann
// wurde mit ES2017 async/await eingeführt.

// async/await ist eine Möglichkeit, asynchrone Operationen zu handhaben.
// es ermöglicht uns asynchronen Code zu schreiben, der wie synchron ausgeführter code aussieht.

const asyncFunction = async () => {
    // Hier wird der asynchrone Vorgang ausgeführt.
    // Wenn der Vorgang erfolgreich abgeschlossen wurde, wird die resolve-Funktion aufgerufen.
    // Wenn der Vorgang fehlgeschlagen ist, wird die reject-Funktion aufgerufen.
    // In diesem Beispiel wird die resolve-Funktion aufgerufen, wenn die Zahl größer als 5 ist.
    // Ansonsten wird die reject-Funktion aufgerufen.
    const randomNumber = Math.floor(Math.random() * 10)
    if (randomNumber > 5) {
        return randomNumber
    } else {
        throw randomNumber
    }
}

asyncFunction().then((result) => {
    console.log('ASYNC/AWAIT: Promise fulfilled', result)
}).catch((error) => {
    console.log('ASYNC/AWAIT: Promise rejected', error)
})

// mit await kann man in async Funktionen auf das Ergebnis von anderen Promises warten.
// await kann nur in async Funktionen verwendet werden.

const asyncFunction2 = async () => {
    try {
        const randomNumber = await asyncFunction()
        console.log('ASYNC/AWAIT: Promise fulfilled', randomNumber)
    } catch (error) {
        console.log('ASYNC/AWAIT: Promise rejected', error)
    }
}

asyncFunction2()
