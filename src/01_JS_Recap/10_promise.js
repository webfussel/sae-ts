// Promises sind ein weiteres Konzept, das in JavaScript eingeführt wurde, um asynchrone Operationen zu handhaben.
// Sie sind ein Objekt, das einen asynchronen Vorgang darstellt, der entweder erfolgreich abgeschlossen wurde oder fehlgeschlagen ist.

// Ein Promise kann in einem der folgenden Zustände sein:
// - pending: Initialer Zustand, weder erfüllt noch abgelehnt.
// - fulfilled: Der asynchrone Vorgang wurde erfolgreich abgeschlossen.
// - rejected: Der asynchrone Vorgang ist fehlgeschlagen.
// - settled: Der asynchrone Vorgang wurde entweder erfolgreich abgeschlossen oder fehlgeschlagen, aber nicht mehr pending.

// Ein Promise wird mit dem new-Operator und dem Promise-Konstruktor erstellt.
// Der Konstruktor erwartet eine Funktion mit zwei Parametern: resolve und reject. (Ein callback)
// Diese Funktion wird sofort aufgerufen, wenn das Promise erstellt wird.

const myPromise = new Promise((resolve, reject) => {
    // Hier wird der asynchrone Vorgang ausgeführt.
    // Wenn der Vorgang erfolgreich abgeschlossen wurde, wird die resolve-Funktion aufgerufen.
    // Wenn der Vorgang fehlgeschlagen ist, wird die reject-Funktion aufgerufen.
    // In diesem Beispiel wird die resolve-Funktion aufgerufen, wenn die Zahl größer als 5 ist.
    // Ansonsten wird die reject-Funktion aufgerufen.
    const randomNumber = Math.floor(Math.random() * 10)
    if (randomNumber > 5) {
        resolve(randomNumber)
    } else {
        reject(randomNumber)
    }
})

// Ein Promise kann mit der then()-Methode abgeschlossen werden.
// Mit catch() lassen sich Fehler abfangen.
myPromise.then((result) => {
    console.log('PROMISE: Promise fulfilled', result)
}).catch((error) => {
    console.log('PROMISE: Promise rejected', error)
})
