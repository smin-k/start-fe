var sum =0
while(1){
    var input = window.prompt('숫자를 알려주세요');
    if (input == null) break;
    sum +=Number(input)
}
alert("총합은"+sum)