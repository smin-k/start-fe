// 1부터 100까지 출력하는 프로그램
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// 홀수 출력하기
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 1) {
    // 홀수
    console.log(i);
  }
}

// 구구단 출력
for (front = 2; front <= 9; front++) {
  for (back = 1; back <= 9; back++) {
    console.log(front + 'x' + back + '=' + front * back);
  }
}

function gugudan() {
  for (front = 2; front <= 9; front++) {
    for (back = 1; back <= 9; back++) {
      console.log(front + 'x' + back + '=' + front * back);
    }
  }
}

// 합
var num = 0;
var sum = 0;
while ((num = prompt('숫자를 입력하세요')) !== '') {
  sum += parseInt(num);
}
alert(`합은 ${sum}`);

// 평균값

var count = [10, 20, 30, 40, 50, 60, 70, 100];

abs = count.reduce((sum, current) => sum + current, 0) / count.length;
console.log(abs);

//객체

function Car(model, year) {
  this.SEAT_COUNT = 5;

  this.model = model;
  this.year = year;

  this.bbang = function () {
    console.log('빵빵');
  };
}

var car = new Car('k5', 2012);

car.bbang();

// 숫자들의 합
var sum = 0;
while (1) {
  var input = window.prompt('숫자를 알려주세요');
  if (input == null) break;
  sum += Number(input);
}
alert('총합은' + sum);
