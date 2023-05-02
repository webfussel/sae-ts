// Optional Chaining erlaubt es uns, Eigenschaften von Objekten zu lesen, ohne dass wir uns um die Existenz der Eigenschaften sorgen müssen.
// Optional Chaining wird mit einem Fragezeichen-Punkt ?. geschrieben.
// Wenn der Teil vor dem ?. nicht existiert, wird undefined zurückgegeben.
// Optional Chaining funktioniert auch mit eckigen Klammern. Wenn die Eigenschaft nicht existiert, wird undefined zurückgegeben.
// Optional Chaining funktioniert auch mit Methoden. Wenn die Methode nicht existiert, wird undefined zurückgegeben.
// Somit verhindern wir, dass das Programm abbricht, wenn eine Eigenschaft nicht existiert.

const apiResponse = [
    {
        national_dex_number: 849,
        names: {
            en: 'Toxtricity',
            fr: 'Acieralma',
            ja: 'ストリンダー',
            de: 'Riffex',
        },
        types: ['Electric', 'Poison'],
        sprites: {
            normal: {
                base: {
                    front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/849.png',
                    back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/849.png',
                },
                shiny: {
                    front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/849.png',
                    back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/849.png',
                }
            },
            gigantamax: {
                base: {
                    front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10186.png',
                    back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/10186.png',
                },
                shiny: {
                    front: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10186.png',
                    back: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/10186.png',
                }
            }
        },
    }
]

// old way
let shinyGigantamaxSpriteOld
// Du musst bei jedem Feld prüfen, ob es überhaupt vorhanden ist
// Wenn ein Feld nicht vorhanden ist und du versucht auf eine Eigenschaft davon zuzugreifen ranzt das ganze Programm ab
if (apiResponse && apiResponse.length && apiResponse[0].sprites && apiResponse[0].sprites.gigantamax) {
    shinyGigantamaxSpriteOld = apiResponse[0].sprites.gigantamax.shiny
}

// new way
// Hier ranzt nichts ab, wenn ein Feld nicht vorhanden ist, sondern es wird undefined zurückgegeben
const shinyGigantamaxSpriteNew = apiResponse?.[0]?.sprites?.gigantamax?.shiny

console.log('/----------AREA OF OPTIONAL CHAINING----------/')
console.log('if: ', shinyGigantamaxSpriteOld)
console.log('optional chaining: ', shinyGigantamaxSpriteNew)
