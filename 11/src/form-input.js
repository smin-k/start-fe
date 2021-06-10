import { render } from "./html-render";
import todoModel from "./todo-model";

const $inputForm = document.querySelector("#input-form");
const $input = document.querySelector("#input");

function init(data) {
  $inputForm.addEventListener("submit", (event) => {
    event.preventDefault(); // form query를 서버로 넘기는 것을 막는다.

    const text = $input.value;
    if (text === "") return;
    data.push({
      ...todoModel,
      text: text,
      isDone: false,
    });
    render(data);
  });
}

export default { init };
