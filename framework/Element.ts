export class Element {
    html: HTMLElement;

    // creates an element and appends it to app
    constructor({ type, className, idName }: Args, innerText?: string) {
        this.html = document.createElement(type);
        const newTextNode = document.createTextNode(innerText || "");
        this.html.append(newTextNode);

        if (className) this.html.setAttribute("class", className);
        if (idName) this.html.setAttribute("id", idName);

        const app = document.getElementById("app");
        app!.append(this.html);
    }

    // changes the inner text
    setText(text: string) {
        if (!text) return;
        this.html.innerText = text;
    }

    toggleTextOnClick(value1: string, value2: string) {
        this.html.addEventListener("click", () => {
            if (this.html.innerText == value1) return this.setText(value2)
            if (this.html.innerText == value2) return this.setText(value1)
        })
    }

    // handle events
    handleEvent(event: string, f: EventListener) {
        this.html.addEventListener(event, f)
    }

    onClick(f: (e: MouseEvent) => void) {
        this.html.addEventListener("click", f);
    }
}

interface Args {
    type: "div" | "p" | "button" | "span"
    className?: string
    idName?: string
}