var bug = document.getElementById("bug");
var box = document.getElementById("box");
var life_element = document.getElementById("life");
var point_element = document.getElementById("point");




var life=10;
var point=0;

bug.addEventListener('click',function(){
    point++;
    point_element.innerHTML=point
    change_bug()
    window.clearInterval(Interval)
    Interval = setInterval(miss_bug,1000)
})

function miss_bug(){
    if( life <= 0)
    {
        window.clearInterval(Interval)
        alert("gameover")
        return;
    }
    life--;
    life_element.innerHTML=life;
    change_bug()

}

function change_bug(){
    bug.style.left = getRandom(box.offsetWidth)+"px"
    bug.style.top =  getRandom(box.offsetHeight)+"px"

}

function getRandom(range) {
    return (Math.random() * (range));
  }

var Interval = setInterval(miss_bug,1000)












