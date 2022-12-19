import { btn } from "./components/Button";

export const elements: any = [];


const root = document.getElementById("root");
elements.forEach((e: any) => {
  root?.appendChild(e);
});
