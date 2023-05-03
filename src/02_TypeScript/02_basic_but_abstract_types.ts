// Es gibt weitere grundlegende Typen, die wir anschauen sollten, die aber häufig nur in Kombination mit anderen Typen, oder als Rückgabetypen von Funktionen auftauchen.

// null
const nullValue: null = null
const stringOrNull: string | null = null
const iMayReturnNull = (returnNull: boolean): string | null => {
    if (returnNull) { // Im besten Falle würde man hier irgendeine Abfrage machen, evtl. eine API aufrufen, und dann null in manchen Fällen zurückgeben.
        return null
    }
    return 'not null'
}

// undefined
const undefinedValue: undefined = undefined
const stringOrUndefined: string | undefined = undefined
const iMayReturnUndefined = (returnUndefined: boolean): string | undefined => {
    if (!returnUndefined) return 'I AM A BANANA'
}

// void is nearly same as undefined, but it is used as return type of functions
const voidFunction = (): void => {
    console.log('I am a banana')
}

// never
const neverFunction = (): never => {
    throw new Error('this function will never reach its end')
}

const someFunc = (x: string | number): number => {
    if (typeof x === 'string') {
        return x.length
    } else if (typeof x === 'number') {
        return x
    } else {
        x; // type is never, as this statement is unreachable
    }
    return 0
}

// unknown
const unkownFunction = (x: unknown): void => {
    console.log(x) // can't do much with x, as we don't know its type
}
