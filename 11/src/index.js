// //start...
import { render } from "./html-render.js";
import formInput from "./form-input.js";

import "./todos.css";

const todos = [
  {
    text: "JS공부기초",
    isDone: true,
  },
  {
    text: "JS공부고급",
    isDone: false,
  },
];

formInput.init(todos);
render(todos);

const $result = document.querySelector("#result");
$result.addEventListener("click", (event) => {
  const { className } = event.target;
  if (className == "delete") {
    const { index } = event.target.parentElement.dataset;
    todos.splice(index, 1);
    render(todos);
  } else if (className == "toggle-checked") {
    console.log("hello");
    const { index } = event.target.parentElement.dataset;
    todos[index].isDone = !todos[index].isDone;
    render(todos);
  }
});
