const min = document.getElementById('min');
const max = document.getElementById('max');
// eslint-disable-next-line no-unused-vars
const box = document.getElementById('box');
const btn = document.getElementById('btn');

// eslint-disable-next-line no-console
let count = 100;
btn.addEventListener('click', () => {
  const result =
    parseInt(Math.random() * (max.value - min.value), 10) +
    parseInt(min.value, 10);
  count = 50;
  const animation = setInterval(() => {
    box.innerHTML = result - count;
    count -= 1;
    if (count <= 0) {
      clearInterval(animation);
    }
  }, 10);
});
// eslint-disable-next-line no-console
