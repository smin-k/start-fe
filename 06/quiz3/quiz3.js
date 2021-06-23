window.addEventListener("load", function () {
  var text_btn = document.getElementsByClassName("text-btn");
  var add_red = document.getElementsByClassName("add-red");
  var add_btn = document.getElementsByClassName("add-btn");
  var delete_btn = document.getElementsByClassName("delete-btn");
  var reset_btn = document.getElementsByClassName("reset-btn");
  var toggle_btn = document.getElementsByClassName("toggle-btn");
  var image_btn = document.getElementsByClassName("image-btn");

  add_red[0].addEventListener("click", color_red);
  add_btn[0].addEventListener("click", add_box);
  delete_btn[0].addEventListener("click", del_box);
  reset_btn[0].addEventListener("click", reset_box);
  text_btn[0].addEventListener("click", to_text);
  toggle_btn[0].addEventListener("click", toggle_box);
  image_btn[0].addEventListener("click", img_box);
});

function color_red() {
  box = document.getElementsByClassName("box");
  for (i = 0; i < box.length; i++) {
    box[i].className += " red";
  }
}

function add_box() {
  div = document.createElement("div");
  div.className += "box";
  document.body.appendChild(div);

  return div;
}

function del_box() {
  box = document.getElementsByClassName("box");
  box[box.length - 1].remove();
}

function reset_box() {
  box = document.getElementsByClassName("box");
  for (i = box.length; i > 0; i--) {
    box[i - 1].remove();
  }
}

function to_text() {
  box = document.getElementsByClassName("box");
  text = document.getElementsByClassName("txt");
  for (i = 0; i < box.length; i++) {
    box[i].innerHTML = text[0].value;
  }
}

function toggle_box() {
  box = document.getElementsByClassName("box");
  for (i = box.length; i > 0; i--) {
    box[i - 1].classList.toggle("hide");
  }
}

function img_box() {
  var box = document.getElementsByClassName("box");
  while (box.length == 0) {
    box = add_box();
  }

  for (i = 0; i < box.length; i++) {
    img = document.createElement("img");
    img.src = "https://i.imgur.com/69NjYBH.png";
    box[i].appendChild(img);
  }
}
