<p align="left">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./assets/full_logo-light.svg">
    <img alt="Light.svg" src="./assets/full_logo-dark.svg" width="300px">
  </picture>
</p>

# Create light project

The easiest way to get started with Light.js is by using `create-light-project`. This CLI tool enables you to quickly start building a new Light.js application, with everything set up for you. To get started, use the following command:

### Interactive

You can create a new project interactively by running:

```bash
npx create-light-project@latest
```

# Documentation

Light.js is a JavaScript framework for building user interfaces. Go throught this documentation to have a better understanding. Hope you have already successfully created a light project using `create-light-project` cli tool so let's jump forward.

### Creating Elements

To create Html Elements we have to use the Element class that comes with this framework. Creation of elements are possible simply by instantiating the class with some arguments. Below is an example of creating a button element using Element class.

```js
import { Element } from "../framework/index";

new Element({ type: "button", className: "btn" }, "Click Me Btn");
```

| Args      | Description                          |
| --------- | ------------------------------------ |
| type      | Element type ("p", "button", "h1"..) |
| className | Gives the element a class            |
| idName    | Gives the element an id              |
| innerText | Sets the inner text of the element   |
| href      | Sets the href of `a` element         |
| src       | Sets the src of `img` element        |

### Attaching event listeners

Element evenets can be handled by attaching listeners. We can attach listeners to our intanciated class. Below is and example of handling event.

```js
const countBtn = new Element({ type: "button" }, "Click Me");

// Listener function
let count = 0;
const handleClick = () => {
  count += 1;
  countBtn.setText(`Count is ${count}`);
};

// Attaching listeners
countBtn.handleEvent("click", handleClick);
countBtn.onClick(handleClick); // Only for click events
```

### Elements nesting

We can nest elements by setting the setChild property of any element like below

```js
const parent = new Element({ type: "div" });
const child = new Element({ type: "div" });

parent.setChild(child.html);
```

### Adding images

To add images we can simply import the image and pass it as url of a img Element

```js
import imgSrc from "./assets/image.png";

const imageEl = new Element({ type: "img", src: imgSrc });
```
