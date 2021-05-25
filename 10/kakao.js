const $btn = document.querySelector("#search-btn");
const $text = document.querySelector("#search-text");
const $result = document.querySelector("#result");
const url = "https://dapi.kakao.com/v2/search/web";
const headers = { Authorization: "KakaoAK eddf13cbf067d7cc5dd00a72cb025072" };

function success(data) {
  const { documents } = data;
  //   const li = documnets.map((doc) => {
  //     return `<li class="list-group-item"><a href="${doc.url}" target="_blank">${doc.contents}</a></li>`;
  //   });
  let str = ``;
  for (let i = 0; i < documents.length; i += 1) {
    const doc = documents[i];
    str += `<li class="list-group-item"><a href="${doc.url}" target="_blank">${doc.contents}</a></li>`;
  }

  $result.innerHTML = `<ul class="list-group list-group-flush">${str}</ul>`;
}
function error() {
  // eslint-disable-next-line no-alert
  alert("데이터를 가져올수 없습니다.");
}

function search() {
  const { value } = $text;
  if (value === "") {
    // eslint-disable-next-line no-alert
    alert("검색어를 입력하세요");
    return false;
  }
  fetch(`${url}?query=${value}`, { headers })
    .then((res) => res.json())
    .then(success)
    .catch(error);

  return true;
}

$btn.addEventListener("click", search);
