var cur_box="none";
var posx=0; 
var posy=0;


var box1 =get_box("box1")
var box2 =get_box("box2")

function get_box(id){
    box= document.getElementById(id);
    box.style.left= box.offsetLeft+"px";
    box.style.top= box.offsetTop+"px";
    
    box.addEventListener('mousedown',function(e){
        dragged ='true' 
        posx=e.clientX; 
        posy=e.clientY;
        cur_box=e.target
    
    });
    return box
}

document.addEventListener('mouseup',function(e){
    cur_box="none"
});

document.addEventListener('mousemove',function(e){
    if(cur_box != 'none')
    {
        cur_box.style.left = parseInt(cur_box.style.left) + (e.clientX - posx)+ "px";  
        cur_box.style.top  = parseInt(cur_box.style.top) + (e.clientY - posy)+ "px";
        posx= e.clientX;
        posy= e.clientY;
     }
        
});
