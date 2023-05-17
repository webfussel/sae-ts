// schaut euch die datei globals.d.ts an
const replaceDOM = () => {
    document.documentElement.innerHTML = 'hi'
}

window.replaceDOM = replaceDOM
