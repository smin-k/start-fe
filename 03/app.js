console.log(window.outerWidth)
console.log(window.name)
//window.open('http://www.daum.net');
//윈도우는 생략 가능

const element = document.getElementById('debug');
console.log(element)

const div = document.createElement('div');
div.style.border = "1px solid red";
div.innerHTML = "hello!!";

document.body.appendChild(div);