var Input = document.querySelector(".input");
var Cheakbtn = document.querySelector(".cheakbtn");
var OutputDiv = document.querySelector(".output");
var Outputimg = document.querySelector(".img");



Cheakbtn.addEventListener("click" ,clickHandler);



function clickHandler(){
   var input = reverse(Input.value);
   console.log(input)
}

