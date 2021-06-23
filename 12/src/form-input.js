import todoModel from './todo-model';
import { render } from './html-render';

const $inputForm = document.querySelector('#input-form');
const $input = document.querySelector('#input');

function init(data) {
  $inputForm.addEventListener('submit', (event) => {
    event.preventDefault(); //이벤트 전달 중지
    const text = $input.value;
    if (!text) return; //데이터를 입력 하지 않으면 끊김
    $input.value = '';
    data.push({
      //데이터 추가
      ...todoModel,
      text,
      isDone: false,
    });
    render(data);
  });
}

export default {
  init,
};
