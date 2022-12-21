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

# Who should use this framework ?

lightjs is a simple framework compared to React, Angular and other frameworks like that. There are a few things to keep in mind before you choose light. Let’s talk about when should you use light.

- If you want to build a small web app and want to use node modules, follow a separated components project structure, and keep your app small in size.
- If you know html css javascript and don’t want to learn frameworks or you want to get a little idea of how frontend frameworks work you should give lightjs a try.

# Documentation

Light.js is a JavaScript framework for building user interfaces that comes with typescript and sass support out of the box. Go throught this documentation to have a better understanding. Hope you have already successfully created a light project using `create-light-project` cli tool so let's jump forward.

### Creating components

Components in lightjs is a function that returns a template that can be appended to the dom. You can pass props as arguments of the function. A template is a html wrapped in string. You can also add separate styles for the component. Let's take an example of a Button component.

```ts
import "./styles.scss";

interface Props {
  text: string;
}

export const Button = ({ text }: Props) => {
  const template = `
      <button class=btn>${text}</button>
    `;
  return template;
};
```

### Appending to dom

You can render components to the dom with the help of the `append()` function. Passing the component as an argument of the append function will render the component on the dom.

```ts
import { append } from "../framework/Core";
import { Button } from "./components/Button";

// getting the element
const btnEl = Button({ text: "Click Me!" });

// appending to the dom
append(btnEl);
```

### Handling events

Events can be handled with the help of `onEvent()` function. It takes an `id: string` as the first param,`event: string` type as the second param and a handler function as the third param. Also only for click events there's a function `onClick()`

```ts
import { append, onClick, onEvent } from "../framework/Core";
import { Button } from "./components/Button";

// getting the element
const btnEl = Button({ text: "Click Me!" });

// appending to the dom
append(btnEl);

// handler functions
const handleClick = (e: PointerEvent) => {
  e.preventDefault();
  alert("clicked");
};

// attaching event listeners
onEvent("countBtn", "click", handleClick);
onClick("countBtn", handleClick);
```

### Other functions

`setText(id:string, text:string)`: changes the text value of an element

```ts
import { setText } from "../framework/Core";

const newText = "I am a Button";
setText("countBtn", newText);
```
