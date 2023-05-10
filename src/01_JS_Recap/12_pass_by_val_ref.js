const changeVal = (x) => {
    x += 1
}

const changeRef = (x) => {
    x.splice(1, 1)
}

const someNumber = 10
const someArray = [1,2,3,4,5,6,7]

changeVal(someNumber)
changeRef(someArray)

console.log('PASS BY VAL / REF', someNumber)
console.log('PASS BY VAL / REF', someArray)
