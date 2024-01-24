function add (x: number, y: number) : number
function add (x: string, y: string) : string
function add (x: any, y: any) : any {
    return x + y
}

add(1,2)
add('Hello', ' World!')

function getElement (element : HTMLDivElement) : Element | null
function getElement (element : HTMLFormElement) : Element | null

function getElement (element : HTMLElement) : Element | null

function getElement (element : Element) : Element | null {
    return element.querySelector('#app')
}
