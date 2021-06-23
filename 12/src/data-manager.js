function saveData(data) {
  //console.log(data);
  localStorage.setItem('data', JSON.stringify(data));
}

function loadData() {
  const dataString = localStorage.getItem('data') || '[]';
  return JSON.parse(dataString);

//   fetch('http://localhost:5000/todos') //기본이 3000번 이지만 충돌이 발생해서 --port로 포트 변경을 해줌
//     .then((response) => {
//       response.json().then((data) => {
//         callback(data);
//       });
//     });
}

export { saveData, loadData };
