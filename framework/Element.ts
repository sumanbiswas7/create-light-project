export class Element {
    html: HTMLElement;

    // creates an element and appends it to app
    constructor({ type, className, idName, src, href }: Args, innerText?: string) {
        this.html = document.createElement(type);
        const newTextNode = document.createTextNode(innerText || "");
        this.html.append(newTextNode);

        if (type == "img") {
            const imgEl = this.html as HTMLImageElement
            imgEl.src = src || ""
        }
        if (type == "a") {
            const aEl = this.html as HTMLAnchorElement
            aEl.href = href || ""
            aEl.target = "_blank"
        }

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

    // set inner elements
    setChild(element: HTMLElement) {
        this.html.appendChild(element)
    }

}

interface Args {
    type: "div" | "p" | "button" | "span" | "img" | "a"
    className?: string
    idName?: string
    src?: string
    href?: string
}