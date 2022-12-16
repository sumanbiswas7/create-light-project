import "./style.css"
import { Element } from "../framework/index"

const clickMeBtn = new Element({ type: "button" }, "Click Me Pls")
const para = new Element({ type: "p", idName: "para" }, "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Non illum alias molestiae nulla fuga consectetur.")
const countBtn = new Element({ type: "button" }, "Count is 0")

let count = 0
const handleClick = () => {
    count += 1
    countBtn.setText(`Count is ${count}`)
}

countBtn.onClick(handleClick)
