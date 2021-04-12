btn = document.getElementById("btn");

btn.addEventListener('click',function(){
    result= document.getElementById("result");
    num= document.getElementById("num");
    dan = num.value;
    if(!isNumber(dan))
        return alert("숫자가 아닙니다!")
    result.innerHTML=""
    for(i= 1 ; i < 10 ; i ++ ){
        result.innerHTML+= `${dan} X ${i} = ${dan*i}<br>`
    }
    
})


function isNumber(s) {
    s += ''; // 문자열로 변환
    s = s.replace(/^\s*|\s*$/g, ''); // 좌우 공백 제거
    if (s == '' || isNaN(s)) return false;
    return true;
  }












