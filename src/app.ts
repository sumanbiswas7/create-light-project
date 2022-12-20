import "./global.scss"
import { Button } from "./components/Button/Button"
import { Logo } from "./components/Logo/Logo"
import { Text } from "./components/Text/Text"
import { append, onClick, setText } from "../framework/Core"

const docsUrl = "https://github.com/sumanbiswas7/lightjs#documentation"

// elements
const docsBtnEl = Button({ id: "docsBtn", href: docsUrl, text: "Docs" })
const countBtnEl = Button({ id: "countBtn", text: "Count is 0" })
const logoEl = Logo()
const textEl = Text()

// appending elements
append(logoEl)
append(textEl)
append(docsBtnEl)
append(countBtnEl)

// event handlers
let count = 0
const handleClick = (e: PointerEvent) => {
    e.preventDefault()
    setText("countBtn", `Count is ${++count}`)
}

// attatching listeners
onClick("countBtn", handleClick)
