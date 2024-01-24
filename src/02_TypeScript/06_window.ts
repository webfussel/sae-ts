// schaut euch die datei globals.d.ts an
const replaceDOM = (content : string) => {
    document.documentElement.innerHTML = content
}

window.replaceDOM = replaceDOM
