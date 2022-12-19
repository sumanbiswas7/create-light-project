import "./style.css"
import { Element } from "../framework/index"
import lightLogoImg from "./assets/full_logo-light.svg"

// Elements
new Element({ type: "img", idName: "img", className: "logo_img", src: lightLogoImg })
new Element({ type: "p", className: "text" }, "Get started by editing src/app.ts")
new Element({ type: "a", className: "btn doc_btn", href: "https://github.com/sumanbiswas7/lightjs#documentation" }, "Docs")
const countBtn = new Element({ type: "button", className: "btn count_btn" }, "Count is 0")

// Functions
let count = 0
const handleClick = () => {
    count += 1
    countBtn.setText(`Count is ${count}`)
}

// Attaching Listeners
countBtn.onClick(handleClick)
