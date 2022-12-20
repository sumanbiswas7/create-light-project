export function append(element: string) {
    const newEl = document.createElement("div")
    newEl.innerHTML = element
    document.getElementById("app")!.appendChild(newEl)
}

// handle onClick event 
export function onClick(id: string, f: (e?: any) => any) {
    const element = document.getElementById(id)
    element?.addEventListener("click", f)
}

// handle any event 
export function onEvent(id: string, event: string, f: () => any) {
    const element = document.getElementById(id)
    element?.addEventListener(event, f)
}

export function setText(id: string, text: string) {
    const element = document.getElementById(id)
    element!.innerText = text
}