box= document.getElementById('box');
var dragged = 'false';
var posx=0; 
var posy=0;
box.style.left=0
box.style.top=0
box.addEventListener('mousedown',function(e){
    dragged ='true' 
    posx=e.clientX; 
    posy=e.clientY;

});

document.addEventListener('mouseup',function(e){
    dragged ='false'
});

box.addEventListener('mousemove',function(e){
    if(dragged == 'true')
    {
        // var offsetx=e.clientx-box.style.left; 
        // var offsety=e.clienty-box.style.top;
       //e = window.event;
        // console.log(box.style.left)
        // if (!e) var e = window.event;
        // if (e.clientX || e.clientY) 	{
        //     posx = e.clientX;
        //     posy = e.clientY;
        // }
        // else if (e.clientX || e.clientY) 	{
        //     posx = e.clientX + document.body.scrollLeft
        //         + document.documentElement.scrollLeft;
        //     posy = e.clientY + document.body.scrollTop
        //         + document.documentElement.scrollTop;
        // }
        // console.log(box.style.left)
        // console.log(box.style.top)
        // console.log(posx-e.clientX)
        // console.log(posy-e.clientY)
       //console.log(parseInt(box.style.left, 10))
       
       //console.log(box.style.left);
       console.log(e.clientX - posx+ "px");
       console.log(parseInt(box.style.left) + (e.clientX - posx)+ "px");

       //console.log(parseInt(box.style.top,10) + e.clientY - posy);
        //box.style.left = parseInt(box.style.left) + e.clientX - posx+ "px";
        box.style.left = parseInt(box.style.left) + (e.clientX - posx)+ "px";
        
        box.style.top  = parseInt(box.style.top) + (e.clientY - posy)+ "px";

        posx= e.clientX;
        posy= e.clientY;
        // box.style.left=posx-box.offsetWidth/2+"px";
        // box.style.top=posy-box.offsetHeight/2+"px";
    //     box.style.left=posx-offsetx+"px";
    //     box.style.top=posy-offsety+"px";
     }
        
});
